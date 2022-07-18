import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useFetch = (url) => {
  // STATE & VARIABLES
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // We define the function within useEffect to avoid memoisation
    const fetchItems = async () => {
      setIsPending(false);

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setData(json);
        setShowData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError('Oopps, could not fetch items right now');
      }
    };

    fetchItems();

    // ensure we clean up any request in case our component unmounts during fetching
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    isPending, error, data, showData, setShowData
  };
};
