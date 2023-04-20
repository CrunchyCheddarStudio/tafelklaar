import Link from "next/link"

export default function RestaurantMenu(){
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          Tafel Klaar
        </Link>
        <div>
          <div className="flex">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
              Log in
            </button>
            <button className="text-black border p-1 px-4 rounded">
              Log uit
            </button>
          </div>
        </div>
      </nav>
      {/* NAVBAR */}
      {/* HEADER RESTAURANT PAGE */}
      <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#3766df] to-[#41517e] h-full flex justify-center items-center">
          <h1 className="md:text-7xl text-1xl text-white capitalize text-shadow text-center">
            'T Populierenhof (Hulste)
          </h1>
        </div>
      </div>
      {/* HEADER RESTAURANT PAGE */}
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          {/* RESTAURANT NAVBAR */}
          <nav className="flex text-reg border-b pb-2 text-black font-bold">
            <a href="" className="mr-7">
              Overzicht
            </a>
            <a href="" className="mr-7">
              Menu
            </a>
          </nav>
          {/* RESTAURANT NAVBAR */}
          {/* MENU */}
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl text-black">Menu</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                {/* MENU CARD */}
                <div className="border rounded p-3 w-[49%] mb-3">
                  <h3 className="font-bold text-lg text-black">
                  FILET PUR
                  </h3>
                  <p className="font-light mt-1 text-sm text-black">warme of koude groenten · saus naar keuze · frietjes</p>
                  <p className="mt-7 text-black font-bold">€20.00</p>
                </div>
                {/* MENU CARD */}
              </div>
            </div>
          </main>
          {/* MENU */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </main>
  </main>
    )
}