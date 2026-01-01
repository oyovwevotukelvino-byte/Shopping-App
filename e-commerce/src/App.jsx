import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <> 
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm} />
      <Products searchTerm={searchTerm} />
      <Footer />
      </div>
    </>
    
  );
}

export default App;
