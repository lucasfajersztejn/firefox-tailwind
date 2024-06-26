import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firefoxImg from "../../../assets/img/firefox.png";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="w-full -mx-6 lg:w-2/5 flex flex-col lg:flex-row justify-center items-center">
            <div className="px-6">
              <a href="https://www.mozilla.org/en-US/firefox/new/">
                <img className="w-auto h-7 mx-auto lg:mx-0 hover:animate-bounce" src={firefoxImg} alt="Firefox logo" />
              </a>

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400 text-center lg:text-left">Visit Mozilla Corporation’s not-for-profit parent, the Mozilla Foundation. Portions of this content are ©1998–2024 by individual mozilla.org contributors. Content available under a Creative Commons license.</p>

              <div className="Container mx-auto px-5 py-8 flex items-center">
                <div className="w-full flex justify-center lg:justify-start gap-10">
                  <a href="https://www.linkedin.com/in/lucas-fajersztejn/" className="text-white cursor-pointer">
                    <i className="fa-brands fa-facebook-f text-2xl text-black dark:text-white hover:animate-bounce"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/lucas-fajersztejn/" className="text-white cursor-pointer">
                    <i className="fa-brands fa-x-twitter text-2xl text-black dark:text-white hover:animate-bounce"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/lucas-fajersztejn/" className="text-white cursor-pointer">
                    <i className="fa-brands fa-instagram text-2xl text-black dark:text-white hover:animate-bounce"></i>
                  </a>

                  <a href="https://github.com/lucasfajersztejn/firefox-tailwind" className="text-white cursor-pointer">
                    <i className="fa-brands fa-github text-2xl text-black dark:text-white hover:animate-bounce"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/lucas-fajersztejn/" className="text-white cursor-pointer">
                    <i className="fa-brands fa-linkedin-in text-2xl text-black dark:text-white hover:animate-bounce"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+34 600 000 000</span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2024 - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

