import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import './css/index.css';
  
function App() {
  return (
    <div className="App">
       <Header />
       
       <main>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
       </main>
    </div>
  );
}

export default App;
