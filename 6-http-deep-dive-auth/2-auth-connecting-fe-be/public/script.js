console.log(window.location.href);
const getUserInformation = async () => {
  const response = await axios.get("http://localhost:3000/me", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
  const user_info = document.querySelector("#user-info");
  user_info.innerHTML = `<p>username: ${response.data.username} password: ${response.data.password}</p>`;
};
document.addEventListener("DOMContentLoaded", getUserInformation);

const Signup = async () => {
  const username = document.querySelector("#signup-username").value;
  const password = document.querySelector("#signup-password").value;

  try {
    await axios.post("http://localhost:3000/signup", {
      username,
      password,
    });

    alert("user created successfully");
    window.location.href = "signin";
  } catch (error) {
    console.error("Error during signup:", error);
    alert("Signup failed. Please try again.");
  }
};

const Signin = async () => {
  const username = document.querySelector("#signin-username").value;
  const password = document.querySelector("#signin-password").value;

  try {
    const response = await axios.post("http://localhost:3000/signin", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    getUserInformation();

    alert("signup successfully");

    window.location.href = "dashboard";
  } catch (error) {
    console.error("Error during signup:", error);
    alert("Signup failed. Please try again.");
  }
};

const logout = () => {
  localStorage.removeItem("token");
  getUserInformation();
  window.location.href = "/";
};
