import "./App.css";
import Nav from "./components/nav/Nav";
import AddRocket from "./containers/AddRocket/addRocket";
import Home from "./components/home/Home";
import { navItems } from "./components/nav/navItems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddRocket />} />
          {navItems.map((item) => (
            <Route key={item.text} path={item.path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
