import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import useCounter from "./hooks/useCounter";

const App = () => {
  const [currentPost, setCurrentPost] = useState(1);
  const { count, increaseCount } = useCounter();
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <button onClick={increaseCount}>Increse {count}</button>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      <p>{data.title}</p>
    </div>
  );
};

export default App;
