import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const quoteApi = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      if (res) {
        console.log("quote find!");
        setQuote(res.data.slip.advice);
      } else {
        console.log("quote lost!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    quoteApi();
  }, []);

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>"Random Quotes Generator App"</h1>
          <h2>{quote}</h2>
          <div className="btn" onClick={quoteApi}>
            get quote
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
