import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";
import FormDetails from "./FormDetails";

function App() {

  return (

    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/formdetails" element={<FormDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>

  );
}

export default App;
