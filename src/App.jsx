import "./App.css";
import Title from "./components/Title/Title";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/ui/Navbar/Navbar";
import Body from "./components/Body/Body";
import content1Img from "./assets/img/image_content1.svg";
import content2Img from "./assets/img/image_content2.svg";
import content3Img from "./assets/img/image_content3.png";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title />
      <Body img={content1Img} order={1}/>
      <Body img={content2Img} order={0}/>
      <Body img={content3Img} order={1}/>
    </>
  );
}

export default App;
