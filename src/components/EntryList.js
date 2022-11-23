import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";


const EntryList = (props) => {

  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDeleteEntryButtonPress = (e, UUID) => {

    axios
      .delete("http://localhost:8080/url/deleteURL/" + UUID)
      .then(setReload(!reload))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(
    () => {props.handleCount();},[reload]
  )

  const handleUpdateEntryButtonPress = (e, UUID) => {
    e.preventDefault();

    setOpen(true);
  };

  return (
    <div className="entry-list">
      {props.entries.map((entry) => (
        <div className="entry-preview" key={entry.id}>
          <UpdateModal open={open} handleOpen={setOpen} entry={entry}/>
          <p>
            <b>Long URL</b> <div className="entryValue">{entry.longURL}</div>
          </p>
          <p>
            <b>Short URL</b> <div className="entryValue">{entry.shortURL}</div>
          </p>
          <p>
            <b>Created</b>
            <div className="entryValue">{entry.createdAt}</div>
          </p>
          <div className="individualEntryButtons">
        <button className="updateEntryButton" onClick={(e) => handleUpdateEntryButtonPress(e, entry)}>
              Customise Shortened URL
            </button>
            <button
              className="deleteEntryButton"
              onClick={(e) => {
                handleDeleteEntryButtonPress(e, entry.id);
                props.handleCount();
                console.log("clicked")
              }}
            >
              Delete Entry
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
