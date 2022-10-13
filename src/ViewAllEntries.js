import { useState } from "react";
import axios from "axios";

const ViewAllEntries = () => {
  const [allEntries, setAllEntries] = useState([]);

  const handleViewAllUrlSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:8080/url/allEntries")
      .then((response) => {
        setAllEntries(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>All URLs: </h2>
      <form onSubmit={handleViewAllUrlSubmit}>
        <button>View updated list of URLs</button>
        <p align="centre">{JSON.stringify(allEntries)}</p>
      </form>
    </div>
  );
};

export default ViewAllEntries;
