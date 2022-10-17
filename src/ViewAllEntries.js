import { useState } from "react";
import axios from "axios";
import EntryList from "./EntryList";

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
    <div className="viewAllEntries">
      <div className="header">
        <h2>All URLs</h2>
        <div className="allEntriesButton">
          <button onClick={handleViewAllUrlSubmit}>
            View updated list of URLs
          </button>
        </div>
      </div>
      <div className="content">
        <EntryList entries={allEntries} />
      </div>
    </div>
  );
};

export default ViewAllEntries;
