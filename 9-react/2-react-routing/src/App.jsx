import { useRef, useState } from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Allen</Link>
        <Link to="/neet/online-coaching-class-11">class 11</Link>
        <Link to="/neet/online-coaching-class-12">class 12</Link>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route path="/" element={<Loading />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function Class11Program() {
  const [counter, setCounter] = useState(0);
  const timer = useRef();
  const startClock = () => {
    console.log("started");
    let value = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    timer.current = value;
    console.log(timer.current);
  };
  const stopClock = () => {
    console.log("ended");
    console.log(timer);
    clearInterval(timer.current);
  };
  return (
    <div>
      NEET programs for class 11th
      <div>{counter}</div>
      <button onClick={startClock}>start</button>
      <button onClick={stopClock}>stop</button>
    </div>
  );
}

function Class12Program() {
  const navigate = useNavigate();
  const redirectUser = () => {
    setTimeout(() => {
      console.log("1");
      navigate("/");
    }, 2000);
  };

  const buttonRef = useRef();
  return (
    <div>
      NEET programs for class 12th
      <button ref={buttonRef} onClick={redirectUser}>
        go back to the landig page
      </button>
    </div>
  );
}

function Loading() {
  return <div>welcome to allen</div>;
}

function ErrorPage() {
  return <div>page not found</div>;
}

export default App;
