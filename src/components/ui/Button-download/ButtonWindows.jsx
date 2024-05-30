
function ButtonWindows({ img, span1, span2 }) {
  return (
    <button className="btn-download">
      <img src={img} alt="Logo Windows" className="w-10 h-10" />
      <span className="ml-4 flex items-start flex-col leading-none text-white">
        <span className="text-xs uppercase">{span1}</span>
        <span className="font-medium text-xl">{span2}</span>
      </span>
    </button>
  )
}

export default ButtonWindows