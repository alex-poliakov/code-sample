import { useCallback } from 'react';

export const useHttp = () => {

  const request = useCallback(async (url, method, body) => {
    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return { request };
}