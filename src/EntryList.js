const EntryList = (props) => {
  console.log(props);

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
            <button className="deleteEntryButton">Delete Entry</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
