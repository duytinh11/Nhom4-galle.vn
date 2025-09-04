import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Footer1 from "./Components/Footer1";
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
import './css/style.css';
import Newfeed from "./Pages/Newfeed";
import Profile from "./Pages/Profile";
import Member from "./Pages/Member";
import Comment from "./Pages/Comment";
import Warranty from "./Pages/Warranty";
import Return from "./Pages/Return";
import Security from "./Pages/Security";
  
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
                <Route path="/newfeed" element={<Newfeed/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/comment" element={<Comment/>}/> 
                <Route path="/warranty" element={<Warranty/>}/> 
                <Route path="/return" element={<Return/>}/> 
                <Route path="/security" element={<Security/>}/>     
            </Routes>
            <Footer1 />
            <Footer />
        </div>
       </main>
    </div>
  );
}

export default App;
