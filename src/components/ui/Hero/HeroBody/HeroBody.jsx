import "./HeroBody.css";
import windowsImg from "../../../../assets/img/logo_windows.png";
import appleImg from "../../../../assets/img/apple-logo.png";

function HeroBody() {
  return (
    <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left items-center text-center pb-5">
      <h1 className="lg:text-6xl text-5xl mb-4 font-medium">Lorem ipsum dolor sit amet, consectetur.</h1>
      <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum est, pretium nec hendrerit sed, luctus in</p>

      <div className="flex xl:flex-row md:flex-col flex-wrap w-full justify-center xl:justify-start gap-10 md:gap-0">
        <button className="btn-download">
          <img src={windowsImg} alt="Logo Windows" className="w-10 h-10"/>
          <span className="ml-4 flex items-start flex-col leading-none text-white">
            <span className="text-xs uppercase">Instalar en</span>
            <span className="font-medium text-xl">Windows</span>
          </span>
        </button>

        <button className="btn-download xl:ml-4 md:mt-4 mt-0 xl:mt-0">
          <img src={appleImg} alt="Logo Mac" className="w-10 h-10"/>
          <span className="ml-4 flex items-start flex-col leading-none text-white">
            <span className="text-xs uppercase">Instalar en</span>
            <span className="font-medium text-xl">Mac os</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default HeroBody;