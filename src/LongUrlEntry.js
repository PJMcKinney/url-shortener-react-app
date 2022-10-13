import { useState } from "react";

const LongUrlEntry = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");

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

  return (
    <div className="content">
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
    </div>
  );
};

export default LongUrlEntry;
