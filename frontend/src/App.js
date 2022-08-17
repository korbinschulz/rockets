import "./App.css";
import Nav from "./components/nav/Nav";
import AddRocket from "./containers/AddRocket/addRocket";
import ViewRockets from "./containers/ViewRockets/ViewRockets";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddRocket />} />
          <Route path="view" element={<ViewRockets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
