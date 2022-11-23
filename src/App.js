import LongUrlEntry from "./components/LongUrlEntry";
import Navbar from "./components/Navbar";
import ViewAllEntries from "./components/ViewAllEntries";
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [allEntries, setAllEntries] = useState([]);
  const [count, setCount] = useState(null);

  function counter() {
    setCount(count + 1);
  };

  useEffect(() => {
    axios
    .get("http://localhost:8080/url/allEntries")
    .then((response) => {
      setAllEntries(response.data.response);
    })
    .catch((error) => {
      console.log(error);
    });
  },[count]);

  return (
    <div>
      <Navbar />
      <div className="content">
        <LongUrlEntry handleCount={counter}/>
        <ViewAllEntries urls = {allEntries} setUrls={setAllEntries} handleCount={counter}/>
      </div>
    </div>
      
  );
}

export default App;
