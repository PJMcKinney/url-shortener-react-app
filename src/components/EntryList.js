import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import { Snackbar } from "@mui/material"
import { bgcolor, color } from "@mui/system";


const EntryList = (props) => {

  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbar = () => {
    setSnackbarOpen(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };
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

  function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

  return (
    <div className="entry-list">
      {props.entries.map((entry) => (
        <div className="entry-preview" key={entry.id}>
          <UpdateModal open={open} handleOpen={setOpen} entry={entry}/>
            <b>Long URL</b> <div className="entryValue">{entry.longURL}</div>
            <b>Short URL</b> <div id="shortUrlEntryValue" className="shortUrlEntryValue">http://localhost:8080/url/{entry.shortURL}</div>
            <b>Created</b>
            <div className="entryValue">{entry.createdAt}</div>
          <div className="individualEntryButtons">
        <button className="updateEntryButton" onClick={(e) => handleUpdateEntryButtonPress(e, entry)}>
              Customise Shortened URL
            </button>
            <button
              className="deleteEntryButton"
              onClick={(e) => {
                handleDeleteEntryButtonPress(e, entry.id);
                props.handleCount();
                console.log("clicked");
              }}
            >
              Delete Entry
            </button>
            <button
              className="copyToClipboardEntryShortURL"
              onClick={() => {
                copyElementText("shortUrlEntryValue");
                handleSnackbar();
              }}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      ))}

      <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Copied to Clipboard"
        />
    </div>
  );
};

export default EntryList;
