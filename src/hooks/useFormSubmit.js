import { useState } from 'react';

export const useFormSubmit = (url) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const submit = async (data) => {
    setStatus('loading');
    try {
      await fetch(url, {
        method: "POST",
        // 'no-cors' mode is required for Google Scripts to not block the request,
        // but it means we won't get a readable JSON response back. 
        // We assume success if no network error is thrown.
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return { status, submit, setStatus };
};