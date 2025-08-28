import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Footer1 from "./Components/Footer1";
import './css/index.css';
import './css/style.css';
  
function App() {
  return (
    <div className="App">
       <Header />
       
       <main>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer1 />
            <Footer />
        </div>
       </main>
    </div>
  );
}

export default App;
