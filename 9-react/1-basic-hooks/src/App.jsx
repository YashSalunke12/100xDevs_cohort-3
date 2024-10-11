import { useState } from "react";
import Greetings from "./components/Greetings";
import PostComponent from "./components/PostComponent";
import CardWrapper from "./components/CardWrapper";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleOnClick = () => {
    setPosts([
      ...posts,
      {
        title: "Complete Web Development + Devops + Blockchain Cohort",
        description:
          "Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au..",
        price: "$5989",
        imageUrl:
          "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png",
      },
    ]);
  };

  console.log(posts);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "beige",
          fontFamily: "sans-serif",
          fontSize: "30px",
          fontWeight: "bold",
          padding: "10px",
          boxShadow: "2px 2px black",
        }}
      >
        <Greetings name={"Yash"} />
      </div>

      <div
        onClick={handleOnClick}
        style={{
          padding: "10px 70px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "15px",
          marginTop: "20px",
          display: "inline-block",
          marginLeft: "20px",
        }}
      >
        Add posts
      </div>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {posts.map((post, index) => (
          <CardWrapper width={"300px"}>
            <PostComponent
              title={post.title}
              key={index}
              description={post.description}
              price={post.price}
              imageUrl={post.imageUrl}
            />
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default App;
