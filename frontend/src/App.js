import "./App.css";
import Nav from "./components/nav/Nav";
import AddRocket from "./containers/AddRocket/addRocket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="add" element={<AddRocket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
