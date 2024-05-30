import InfoArticle from "./Info-article/InfoArticle";
import info2Img from "../../../assets/img/image_info2.png";
import info3Img from "../../../assets/img/image_info3.png";

function InformationArticles() {
  return (
    <div className="container px-5 pb-24 mx-auto">
      <InfoArticle image1={info2Img} image2={info3Img}/>
    </div>
  )
}

export default InformationArticles;