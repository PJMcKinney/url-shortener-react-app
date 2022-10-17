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
    <div className="longUrlEntry">
      <div className="longUrlContent">
        <form onSubmit={handleEnterLongUrlSubmit}>
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

      <p>http://localhost:8080/url/{shortURL}</p>
    </div>
  );
};

export default LongUrlEntry;
