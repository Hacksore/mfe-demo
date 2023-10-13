import "./App.css";
import Nav from "remoteApp/Nav";
import Card from "remoteApp/Card";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Vite + React MFE Demo</h1>

      {Array(10)
        .fill(0)
        .map(() => (
          <Card />
        ))}
    </div>
  );
}

export default App;
