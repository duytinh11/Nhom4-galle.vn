import { Routes,Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  
  return (
    <div className="App">
       <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
       </ul>
       <main>
        <div className="container">
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </div>
        
       </main>
    </div>
  );
}

export default App;