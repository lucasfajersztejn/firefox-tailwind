import firefoxImage from "../../../assets/img/firefox.png";

function Navbar() {
  return (
    <nav className="z-20 bg-white dark:bg-slate-800 fixed md:static w-full md:w-auto border-b md:border-none shadow-lg md:shadow-none dark:border-none">
      <div className="p-6 container mx-auto">
        <div className="flex items-center justify-between">
          <div className="z-20">
            <a href="" className="flex items-center">
              <img src={firefoxImage} alt="Logo image" className="w-14 h-14"/>
              <span className="text-3xl ml-3"> <span className="font-bold">Firefox</span> Browser </span>
            </a>
          </div>

          <div>
            <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden/>

            <label htmlFor="hamburger" className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded">
              <div className="h-0.5 w-6 bg-black dark:bg-white transition"></div>
              <div className="mt-2 h-0.5 w-6 bg-black dark:bg-white transition"></div>
            </label>

            <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-3/5 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">

              <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500">Characteristics</a>
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-yellow-400">Help</a>
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-indigo-500">Components</a>
                <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-pink-500">Lenguages</a>
              </div>

              <div className="block md:hidden border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6">
                <a href="" className="block px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:bg-blue-600">Download</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;