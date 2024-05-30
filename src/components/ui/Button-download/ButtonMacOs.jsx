
function ButtonMacOs({ img, span1 , span2 }) {
  return (
    <button className="btn-download xl:ml-4 md:mt-4 mt-0 xl:mt-0">
      <img src={img} alt="Logo Mac" className="w-10 h-10" />
      <span className="ml-4 flex items-start flex-col leading-none text-white">
        <span className="text-xs uppercase">{span1}</span>
        <span className="font-medium text-xl">{span2}</span>
      </span>
    </button>
  )
}

export default ButtonMacOs;