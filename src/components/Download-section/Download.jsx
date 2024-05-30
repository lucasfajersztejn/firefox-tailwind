import firefoxImg from "../../assets/img/firefox.png";
import ButtonMacOs from "../ui/Button-download/ButtonMacOs";
import ButtonWindows from "../ui/Button-download/ButtonWindows";
import googleImg from "../../assets/img/google-play.png";
import appleImg from "../../assets/img/apple-logo.png"

function Download() {
  return (
    <section className="flex px-5 py-24 md:flex-row flex-col items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
      <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img src={firefoxImg} alt="Firefox logo" className="object-cover object-center w-full rounded" />
      </div>

      <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="lg:text-7xl text-6xl mb-8 font-medium text-white">Disponible para móviles</h1>
        
        <div className="flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center">
          <ButtonWindows img={googleImg} span1={"Disponible en"} span2={"Google Play"} />
          <ButtonMacOs img={appleImg} span1={"Consiguelo en"} span2={"App Store"} />        
        </div>
      </div>
    </section>
  )
}

export default Download;