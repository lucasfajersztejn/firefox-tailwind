import "./App.css";
import Title from "./components/Title/Title";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/ui/Navbar/Navbar";
import Body from "./components/Body/Body";
import content1Img from "./assets/img/image_content1.svg";
import content2Img from "./assets/img/image_content2.svg";
import content3Img from "./assets/img/image_content3.png";
import Information from "./components/Information/Information";
import Download from "./components/Download-section/Download";
import Footer from "./components/ui/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  });

  useEffect(() => {
    if (darkMode === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [darkMode])
  

  const handleDarkMode = () => {
    setDarkMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar onDarkMode={handleDarkMode} />
      <Hero />
      <Title />
      <Body img={content1Img} order={1} className={'object-cover object-center rounded shadow-xl'}/>
      <Body img={content2Img} order={0} className={'object-cover object-center rounded'}/>
      <Body img={content3Img} order={1} className={'object-cover object-center rounded'}/>
      <Information/>
      <Download />
      <Footer />
    </>
  );
}

export default App;
