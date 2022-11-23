import React, { useState } from "react";
import { Snackbar } from "@mui/material"

const LongUrlEntry = (props) => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [open, setOpen] = useState(false);

  const handleSnackbar = () => {
    setOpen(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleEnterLongUrlSubmit = (e) => {
    e.preventDefault();
    const urlModel = { longURL };

    fetch("http://localhost:8080/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(urlModel),
    })
      .then((response) => response.json())
      .then((data) => setShortURL(data.response.shortURL));
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
    <div className="longUrlEntry">
      <div className="longUrlContent">
        <form onSubmit={(e) => {
          handleEnterLongUrlSubmit(e);
          props.handleCount();
          }}>
          <input
            placeholder="Enter URL to be shortened"
            type="url"
            required
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
          <button>Convert to Shortened URL</button>
        </form>
      </div>
      <div className="shortUrlDisplay">
      <p id="returnedShortUrl">http://localhost:8080/url/{shortURL}</p>
        <button 
          className="copyToClipboardButton" 
          onClick={(e) => {
            copyElementText("returnedShortUrl");
            handleSnackbar();
          }}
          disabled={longURL.length === 0}
        >
          Copy to Clipboard
        </button>
      </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Copied to Clipboard"

        />
    </div>
  );
};

export default LongUrlEntry;
