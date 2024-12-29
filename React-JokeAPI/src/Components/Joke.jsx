import React, { useEffect, useState } from "react";
import Button from "./Button";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      );
      const data = await response.json();
    //   console.log(data); logging the joke data in console.
      setJoke(data.joke); 
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     fetchAPI();
  //   }, []);
  return (
    <div className="joke">
      <Button callAPI={fetchAPI} />
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
