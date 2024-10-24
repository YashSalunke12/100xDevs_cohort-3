import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, [url]);

  useEffect(() => {
    let clock = setInterval(getPosts, 10 * 1000);
    // cleanup function
    return () => {
      clearInterval(clock);
    };
  }, []);

  return {
    data,
    loading,
  };
};
