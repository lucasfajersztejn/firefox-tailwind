
function InfoArticle({ image1, image2 }) {
  return (
    <div className="flex md:flex-row flex-col flex-wrap -mx-4 -mb-10">
      <div className="md:w-1/2 mb-10 px-4 flex flex-col items-center justify-center">
        <div className="h-80 lg:h-96">
          <img src={image1} alt="" className="object-cover object-center w-full h-full" />
        </div>

        <h2 className="text-4xl font-medium mt-6 mb-3">Lorem ipsum dolor sit.</h2>
        <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo lorem a justo facilisis, eu cursus ex iaculis. Duis vestibulum, enim vitae dictum efficitur, odio ipsum volutpat urna, ut commodo.</p>
      </div>

      <div className="md:w-1/2 mb-10 px-4 flex flex-col items-center justify-center">
        <div className="h-80 lg:h-96">
          <img src={image2} alt="" className="object-cover object-center w-full h-full" />
        </div>

        <h2 className="text-4xl font-medium mt-6 mb-3">Lorem ipsum dolor sit.</h2>
        <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo lorem a justo facilisis, eu cursus ex iaculis. Duis vestibulum, enim vitae dictum efficitur, odio ipsum volutpat urna, ut commodo.</p>
      </div>
    </div>
  )
}

export default InfoArticle;