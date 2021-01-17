import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button } from 'react-bootstrap';
import {TwitterShareButton,TwitterIcon,WhatsappShareButton,WhatsappIcon} from 'react-share'



const App = () => {
  const [quote, setQuote] = useState("");
  const[author, setAuthor] = useState("");

  const quoteAPI = async() => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get(" https://api.quotable.io/random");
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

  useEffect(() => {
    quoteAPI();
  }, [])

  return (
  <div className="App">
    <div className="Container">
      <div className="quoteBox">
        <div className="quote"><h3>{quote}</h3></div>
        <div className="author">-{author}</div>
        <div> <Button className="quoteButton" onClick={quoteAPI}>Generate New Quote</Button></div>
           <TwitterShareButton  url={`${quote} - ${author}`} >
                <TwitterIcon  size={40} round={true} />
           </TwitterShareButton>
            <WhatsappShareButton  url={`${quote} - ${author}`} >
                <WhatsappIcon  size={40} round={true} />
            </WhatsappShareButton>
      </div>
    </div>
  </div>
  )
}

export default App;