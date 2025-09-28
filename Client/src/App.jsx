import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./component/Counter.jsx";
import Navbar from "./component/Navbar.jsx";
import Previous from "./component/Previous.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="h-20">
          <Navbar />
        </div>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/history" element={<Previous />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
