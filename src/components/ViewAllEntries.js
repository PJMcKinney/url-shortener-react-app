import React, { useEffect } from "react";
import EntryList from "./EntryList";

const ViewAllEntries = ({urls, setUrls, handleCount}) => {

  useEffect(() => {
  },[urls]);

  return (
    <div className="viewAllEntries">
      <div className="header">
        <h2>All URLs</h2>
        <div className="allEntriesButton">
        </div>
      </div>
      <div className="content">
        <EntryList entries={urls} setEntries={setUrls} handleCount={handleCount}/>
      </div>
    </div>
  );
};

export default ViewAllEntries;