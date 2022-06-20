import React from 'react'
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const Home = ({work}) => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portofolio work={work} />
        <Services />
        <Testemonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home