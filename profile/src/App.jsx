import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { work, moreWork } from "./Data.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreWork from "./components/portofolio/MoreWork";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home work={work} />} />
          <Route path="more" element={<MoreWork moreWork ={moreWork}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
