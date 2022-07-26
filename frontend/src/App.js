import "./App.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
