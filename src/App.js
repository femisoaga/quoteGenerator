import React, { useState } from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState("random quote");
  const [author, setAuthor] = useState("author");

    const getQuote = async() => {

      try{
        const response = await fetch(url)
        if(!response.ok){
          throw new Error("Network response not ok")
        }

        const data = await response.json()

        setAuthor(data.author)
        setQuote(data.content)

      }catch(error){
        console.error("There was a problem fetching the data", error)
      }
    }

  return (
    <>
      <h1>Random Quote Generator</h1>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 p-12 rounded-3xl w-1/2">
          <div className="flex">
          <p className="p-2">{quote}</p>
          <p className="my-12 font-xs font-light justify-end italic">{author}</p>
          </div>
         
          <div className="flex justify-center mt-12">
          <button
            onClick={getQuote}
            className="bg-green-700 text-white py-2 px-5 w-36"
          >
            Get Quote
          </button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default App;
