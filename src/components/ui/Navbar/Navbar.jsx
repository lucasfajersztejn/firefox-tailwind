import firefoxImage from "../../../assets/img/firefox.png";

function Navbar({ onDarkMode, darkMode }) {
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
                <a href="" className="tracking-wide order-1 md:order-none cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-blue-500">Characteristics</a>
                <a href="" className="tracking-wide order-2 md:order-none cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-yellow-400">Help</a>
                <a href="" className="tracking-wide order-3 md:order-none cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-indigo-500">Components</a>
                <a href="" className="tracking-wide order-4 md:order-none cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-pink-500">Lenguages</a>

                <label className="flex cursor-pointer gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
              
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