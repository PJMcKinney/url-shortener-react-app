import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";

export default function UpdateModal(props) {
  const handleClose = () => props.handleOpen(false);
  const [customURL, setCustomURL] = useState("")

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: '#abd1c6',
    border: "5px solid #004643",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const handleClick = (e, entry) => {
    e.preventDefault();
    ;
    console.log(entry);
    axios({
      method: "put",
      url: "http://localhost:8080/url/updateURL/".concat(entry.id),
      data: {
        id: "2d7f46f9-ee51-4b86-b94b-673a6150d323",
        longURL: entry.longURL,
        shortURL: customURL,
        createdAt: entry.createdAt
      }
    })
    props.entry.shortURL = customURL;
  }

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
        <b>Customise Short URL</b>
        <form 
          className="update-url-form"
          onSubmit={(e) => handleClick(e, props.entry)}
        >
            <input 
              defaultValue={props.entry.shortURL}
              onChange={(e) => setCustomURL(e.target.value)}
              required="true"
            />
          <button type="submit">Update</button>
        </form>
      </Box>
    </Modal>
  );
}
