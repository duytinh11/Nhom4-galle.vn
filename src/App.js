import { Routes, Route, Link,BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Footer1 from "./Components/Footer1";
import ProductList from './Pages/ProductList';
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
                <Route path="/dong-ho" element={<ProductList />} />
            </Routes>
            <Footer1 />
            <Footer />
        </div>
       </main>
    </div>
  );
}

export default App;
