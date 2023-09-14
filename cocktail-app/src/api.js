import React, { useEffect, useState } from "react"

const fetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    const abortFetch = new AbortController();

    fetch(url, {
      // method: 'GET',
      // 'X-RapidAPI-Key': '376e5433bbmsh86691926a6da91dp1eb80bjsn60bd939f0b28',
      signal : abortFetch.signal
    })
    .then(res => res.json())
    .then(data => {
      setData(data)
      setError(false)
    })
    .catch((err) => {
      setError(err.message)
    })

  
    return () => abortFetch.abort();
  }, [url])


  return {data, error}
}

export default fetchData;

