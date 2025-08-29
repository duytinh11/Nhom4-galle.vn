import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import './css/index.css';
import Watchmen from "./Pages/Watchmen";
import Watchwomen from "./Pages/Watchwomen";
import Wallclock from "./Pages/Wallclock";
import Deskclock from "./Pages/Deskclock";
import Treeclock from "./Pages/Treeclock";
import Boxclock from "./Pages/Boxclock";
import Leatherstrap from "./Pages/Leatherstrap";
import Service from "./Pages/Service";
import Repair from "./Pages/Repair";
import Knowledge from "./Pages/Knowledge";
import News from "./Pages/News";
import Sale from "./Pages/Sale";
import Casio from "./Pages/Casio";
import Garmin from "./Pages/Garmin";
  
function App() {
  return (
    <div className="App">
       <Header />
       <main>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watchmen" element={<Watchmen/>}/>
                <Route path="/watchwomen" element={<Watchwomen/>}/>
                <Route path="/wallclock" element={<Wallclock/>}/>
                <Route path="/deskclock" element={<Deskclock/>}/>
                <Route path="/treeclock" element={<Treeclock/>}/>
                <Route path="/boxclock" element={<Boxclock/>}/>
                <Route path="/leatherstrap" element={<Leatherstrap/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/repair" element={<Repair/>}/>
                <Route path="/knowledge" element={<Knowledge/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/sale" element={<Sale/>}/>
                <Route path="/casio" element={<Casio/>}/>
                <Route path="/garmin" element={<Garmin/>}/>
            </Routes>
        </div>
       </main>
    </div>
  );
}

export default App;
