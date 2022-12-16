import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Register from "./Routes/Register";
import Login from "./Routes/Login";

import Test from "./Test";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar/Navbar";
import { UploadReportCard } from "./Components/UploadReportCard";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* <div className="App"></div> */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<UploadReportCard/>} />
      </Routes>
    </>
  );
}

export default App;
