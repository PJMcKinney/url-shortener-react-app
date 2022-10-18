import axios from "axios";

const EntryList = (props) => {
  console.log(props);

  const handleDeleteEntryButtonPress = (e, UUID) => {
    e.preventDefault();

    axios
      .delete("http://localhost:8080/url/deleteURL/" + UUID)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="entry-list">
      {props.entries.map((entry) => (
        <div className="entry-preview" key={entry.id}>
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
            <button className="updateEntryButton">Update Entry</button>
            <button
              className="deleteEntryButton"
              onClick={(e) => handleDeleteEntryButtonPress(e, entry.id)}
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
