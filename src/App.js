import React, { Component, useEffect, useState } from 'react';
import "./App.css";
import axios from "axios";


const App = () => {
  const [quote, setQuote] = useState("");
  const[author, setAuthor] = useState("");

  const quoteAPI = async() => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get(" https://api.quotable.io/random");
      console.log(data);
      arrayOfQuotes=data.data;
      
    } catch (error) {
      console.log(error);
      
    }
    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
      
    }

  };

  const tweetQuote = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quote} ~ ${author}`;
    window.open(tweetPost);
  }

  const whatsAppQuote = () => {
    let whatsAppPost = `whatsapp://send?text=${quote} ~ ${author}`;
    window.open(whatsAppPost);

  }

  useEffect(() => {
    quoteAPI();
  }, [])

  return (
  <div className="App">
    <div className="quoteBox">
      <div className="Container">
        <div className="quote"><h3>{quote}</h3></div>
        <div className="author">~{author}</div>
        <div className="quoteButton"> <button onClick={quoteAPI}>Generate New Quote</button></div>
        <div className ="twitterButton"><button  onClick={tweetQuote}>Tweet</button></div>
        <div className ="whatsAppButton"><button  onClick={whatsAppQuote}>WhatsApp</button></div>

        

      </div>
    </div>
  </div>
  )
}

export default App;