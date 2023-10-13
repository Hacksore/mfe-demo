import "./App.css";
import Nav from "remoteApp/Nav";
import Card from "remoteApp/Card";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="">MFE Home</h1>

      {/* make a tailwind grid of card */}
      <div className="flex flex-wrap gap-2">

        {Array(10)
          .fill(0)
          .map(() => (
            <Card />
          ))}
      </div>
    </div>
  );
}

export default App;
