import React, { useState, useEffect } from 'react';

function DisplayQuote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=humor';
      const headers = { 'X-Api-Key': 'kc1ejU6ycThgSV9AGxNh/A==tzBR9FoBOQwNZoWb' };
      try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw Error('Oops! Something went wrong');
        }
        const result = await response.json();
        setQuote(result[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getQuote();
  }, [setQuote, setLoading, setError]);

  if (loading) {
    return <div className="loading">Loading wait a moment please...</div>;
  }

  if (error) {
    return (
      <>
        <h3>
          Error:
          {error}
        </h3>
      </>
    );
  }

  return (
    <>
      <h1 className="text-white">Tired of math?</h1>
      <br />
      <h3 className="text-white">read the quote of the day</h3>
      <br />
      <blockquote className="text-white quote-container">
        <h4>Quote:</h4>
        <h4>{quote.quote}</h4>
      </blockquote>
      <br />
      <div className="text-white">
        <h4>
          author:
        </h4>
        <h4>
          {quote.author}
        </h4>
      </div>
      <br />
    </>
  );
}

export default DisplayQuote;
