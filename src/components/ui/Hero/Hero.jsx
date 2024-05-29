import HeroBody from "./HeroBody/HeroBody";
import heroImg from "../../../assets/img/image_hero1.png";
import svgImg from "../../../assets/img/image_hero2.svg";

function Hero() {
  return (
    <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40">
      <HeroBody />
      <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img src={heroImg} alt="Hero web image" className="object-cover object-center rounded" />
      </div>

      <img src={svgImg} alt="Svg image" className="hidden md:block absolute right-0 xl:w-1/2 2xl:w-5/12 lg:w-[60%] md:w-[55%] -z-10" />
  
    </div>
  )
}

export default Hero;