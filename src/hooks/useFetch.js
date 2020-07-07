import { useState, useEffect } from 'react';

const useFetch = () => {
  const [request, setRequest] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    async function asyncFetch() {
      await setLoading(true);
      await setError(null);
      await setResponse(null);
      let res = await fetch(request.url, {
        method: request.method || 'GET',
        body:
          request.method && request.method !== 'GET'
            ? JSON.stringify(request.body)
            : null,
        headers: {
          ...request.headers,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      await setLoading(false);

      if (res.status >= 300) {
        await setError(res);
        return;
      }

      await setResponse(await res.json());
    }

    if (request) asyncFetch();
  }, [request]);

  return {
    setRequest,
    request,
    loading,
    error,
    response,
  };
};

export default useFetch;
