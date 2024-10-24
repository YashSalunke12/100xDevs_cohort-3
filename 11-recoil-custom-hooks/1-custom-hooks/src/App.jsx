import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { useCounter } from "./hooks/useCounter";
import "./App.css";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";

const App = () => {
  const [currentPost, setCurrentPost] = useState(1);
  const [inputVal, setInputVal] = useState("");
  const { count, increaseCount } = useCounter();
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );

  const debouncedValue = useDebounce(inputVal, 2000);

  useEffect(() => {
    console.log("api-call");
  }, [debouncedValue]);

  const prev = usePrev(count);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button onClick={increaseCount}>
        Increse {prev}
        {count}
      </button>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      <p>{data.title}</p>
    </div>
  );
};

export default App;
