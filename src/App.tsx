import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewSale from "./pages/NewSale";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newsale" element={<NewSale />} />
      </Routes>
    </Router>
  );
}

export default App;
