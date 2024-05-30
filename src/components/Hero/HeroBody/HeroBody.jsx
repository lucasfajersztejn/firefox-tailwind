
import windowsImg from "../../../assets/img/logo_windows.png";
import appleImg from "../../../assets/img/apple-logo.png";
import ButtonWindows from "../../ui/Button-download/ButtonWindows";
import ButtonMacOs from "../../ui/Button-download/ButtonMacOs";

function HeroBody() {
  return (
    <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left items-center text-center pb-5">
      <h1 className="lg:text-6xl text-5xl mb-4 font-medium">
        Lorem ipsum dolor sit amet, consectetur.
      </h1>
      <p className="mb-8 leading-relaxed text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum est,
        pretium nec hendrerit sed, luctus in
      </p>

      <div className="flex xl:flex-row md:flex-col flex-wrap w-full justify-center xl:justify-start gap-10 md:gap-0">
        <ButtonWindows img={windowsImg} span1={"Descargar en"} span2={"Windows"} />
        <ButtonMacOs img={appleImg} span1={"Instalar en"} span2={"Mac Os"}/>
      </div>
    </div>
  );
}

export default HeroBody;
