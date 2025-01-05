import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

//Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MissingPage from "./pages/MissingPage";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="employee/:id" element={<EmployeeDetails />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
