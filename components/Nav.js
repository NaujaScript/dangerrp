import React, { useState } from "react";
import { Transition } from "@headlessui/react";
<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
</link>

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="xl:py-10 md:py-4 py-4 pb-14 md:pb-4 z-40 top-0 font-russo lg:bg-transparent bg-yellow-500">
      <nav className="bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 mx-auto max-w-7xl">
            <div className="w-full justify-between flex items-center">
              <div className="flex-shrink-0 flex items-center text-white">
                <a href="dangerrp.pl">
                  <img
                    className="h-36 w-36 hover:animate-bounce hover:duration-1000 hover:delay-300"
                    src="../img/logo.png"
                    alt="Workflow"
                  />
                </a>
              </div>
              <div className="hidden md:flex">
                <div className="ml-10 flex">
                  <div class="space-x-24">
                    <a
                      activeClassName="active"
                      href="https://dangerrp.pl"
                      className="text-xl border-yellow-400 border-b-2 shadow-2xl tracking-wider w-40 text-white hover:transition hover:duration-300 hover:delay-150 hover:border-0"
                    >
                      Strona Główna
                    </a>

                    <a
                      href="https://dc.dangerrp.pl/"
                      className="text-xl border-yellow-400 border-b-2 shadow-2xl tracking-wider w-40 text-white hover:transition hover:duration-300 hover:delay-150 hover:border-0"
                    >
                      Discord
                    </a>

                    <a
                      href="http://regulamin.dangerrp.pl/"
                      className="text-xl border-yellow-400 border-b-2 shadow-2xl tracking-wider w-40 text-white hover:transition hover:duration-300 hover:delay-150 hover:border-0"
                    >
                      Regulamin
                    </a>
                  </div>

                </div>
              </div>
            </div>
            {/* INFO: Responsive button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent h-16 w-16 inline-flex items-center p-2 justify-center rounded-md text-white hover:text-white focus:outline-none active:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* INFO:Transition on button */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden absolute w-full z-50" id="mobile-menu">
              <div ref={ref} className="px-2 mt-4 pb-3 space-y-1 sm:px-3 font-sans text-center bg-yellow-500 border-gray-600 border-b-2">
                <a
                  href="https://dangerrp.pl"
                  className="active:border-gray-600 active:border-b-2 hover:border-gray-600 hover:border-b-2 text-white hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Strona Główna
                </a>

                <a
                  href="https://dc.dangerrp.pl/"
                  className="text-white active:border-gray-600 active:border-b-2 hover:border-gray-600 hover:border-b-2 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Discord
                </a>

                <a
                  href="http://regulamin.dangerrp.pl/"
                  className="text-white active:border-gray-600 active:border-b-2 hover:border-gray-600 hover:border-b-2 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Regulamin
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
}

export default Nav;