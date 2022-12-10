import axios from "axios";
import React, { useState, useEffect } from "react";
import { QuoteItem } from "./QuoteItem";

const AdviceApp = () => {
    // https://api.adviceslip.com/
  const API_URL = "https://api.adviceslip.com/advice";
  const [timeDate, setTimeDate] = useState("");
  const [quoteText, setquoteText] = useState("");


  const fetchAdvice = async () => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data.slip.advice);
        setquoteText(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
        setquoteText("some thing error");
      });
  };

  useEffect(() => {
    fetchAdvice();
    // update time-date every minute
    setInterval(() => {
      const currentTime =
        new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
      setTimeDate(currentTime);
    }, 1000);
  }, []);

  return (
    <>
      <QuoteItem quoteText={quoteText} updateAdvice={fetchAdvice} timeDate={timeDate} />
    </>
  );
};

export default AdviceApp;
