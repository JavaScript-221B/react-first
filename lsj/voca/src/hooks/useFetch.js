import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return data;
}