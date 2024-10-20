import { useEffect, useState } from "react";

const useFetch = (url) => {
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

  return {
    data,
    loading,
  };
};

export default useFetch;
