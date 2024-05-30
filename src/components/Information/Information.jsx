import info1Img from "../../assets/img/image_info1.png";
import InformationArticles from "./Information-articles/InformationArticles";
import InformationBody from "./Information-body/InformationBody";

function Information() {
  return (
    <section>
      <h1 className="md:text-6xl text-5xl text-center font-medium md:mt-40 md:mb-80 my-28">Mozilla Firefox your best ally</h1>
      <InformationBody img={info1Img} />
      <InformationArticles />
    </section>
  )
}

export default Information;