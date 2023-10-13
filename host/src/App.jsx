import "./App.css";
import Nav from "remoteApp/Nav";
import Card from "remoteApp/Card";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="text-3xl">Home</h1>

      {/* make a tailwind grid of card */}
      <div className="flex flex-wrap gap-2">
        {Array(100)
          .fill(0)
          .map(() => (
            <Card />
          ))}
      </div>
    </div>
  );
}

export default App;
