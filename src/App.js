import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [allEntries, setAllEntries] = useState([]);

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
    <div className="App">
      <h2>URL Shortener Application</h2>
      <form onSubmit={handleEnterLongUrlSubmit}>
        <label>Enter URL to be shortened:</label>
        <input
          type="url"
          required
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        />
        <button>Convert to Shortened URL</button>
      </form>

      <p>http://localhost:8080/url/{shortURL}</p>

      <h2>All URLs: </h2>
      <form onSubmit={handleViewAllUrlSubmit}>
        <button>View updated list of URLs</button>
        <p align="centre">{JSON.stringify(allEntries)}</p>
      </form>
    </div>
  );
}

export default App;
