import LongUrlEntry from "./LongUrlEntry";
import Navbar from "./Navbar";
import ViewAllEntries from "./ViewAllEntries";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <LongUrlEntry />
        <ViewAllEntries />
      </div>
    </div>
  );
}

export default App;
