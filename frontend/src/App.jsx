import { BrowserRouter, Route, Routes } from "react-router-dom";

// components and pages 
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={ <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
