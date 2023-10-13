import './App.css'
import Nav from 'remoteApp/Nav';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
        </a>
      </div>
      <h1>Vite + React MFE</h1>
      <div className="card">
        <Nav />
      </div>
    </div>
  )
}

export default App
