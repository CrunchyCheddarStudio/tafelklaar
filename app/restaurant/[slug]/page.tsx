import Link from "next/link";

export default function RestaurantDetails(){
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
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* RESTAURANT NAVBAR */}
          <nav className="flex text-reg border-b pb-2 text-black font-bold">
            <Link href="/restaurant/tpopulierenhof" className="mr-7">
              Overzicht
            </Link>
            <Link href="/restaurant/tpopulierenhof/menu" className="mr-7">
              Menu
            </Link>
          </nav>
          {/* RESTAURANT NAVBAR */}
          {/* TITLE */}
          <div className="mt-4 border-b pb-6 text-black">
            <h1 className="font-bold md:text-6xl text-1xl">
              'T Populierenhof
            </h1>
          </div>
          {/* TITLE */}
          {/* RATINGS */}
          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p className="text-black">*****</p>
              <p className="text-reg ml-3 text-black">4.9</p>
            </div>
            <div>
              <p className="text-reg ml-4 text-black">600 Recensies</p>
            </div>
          </div>
          {/* RATINGS */}
          {/* DESCRIPTION */}
          <div className="mt-4">
            <p className="text-lg font-light text-black">
              Restaurant Populierenhof bestaat sinds 1988 en serveert een
              Franse keuken in een gezellig kader. Laat je inspireren door het
              vernieuwde interieur & laat je omverblazen door onze verfijnde
              gerechten. Een rustgevende sfeer van lunch in de week tot diner
              in het weekend.
            </p>
          </div>
          {/* DESCRIPTION */}
          {/* IMAGES */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 text-black border-b pb-5">
              5 Foto's
            </h1>
            <div className="flex flex-wrap">
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://media-cdn.tripadvisor.com/media/photo-s/10/11/73/dd/photo0jpg.jpg"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://media-cdn.tripadvisor.com/media/photo-s/0b/d2/d6/dc/photo1jpg.jpg"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/d1/eb/68/t-populierenhof.jpg"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://media-cdn.tripadvisor.com/media/photo-l/0f/5b/1d/72/koude-visschotel-en-schotel.jpg"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/d1/eb/66/t-populierenhof.jpg"
                alt=""
              />
            </div>
          </div>
          {/* IMAGES */}
          {/* REVIEWS */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5 text-black">
              Wat vinden 100 personen van dit restaurant
            </h1>
            <div>
              {/* REVIEW CARD */}
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <h2 className="text-white text-2xl">MJ</h2>
                    </div>
                    <p className="text-black text-center">Micheal Jordan</p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5 text-black">*****</div>
                    </div>
                    <div className="mt-5">
                      <p className="text-light font-light text-black">
                        Beneden wat dicht bij elkaar maar wij zaten boven en
                        daar stonden de tafels ver van elkaar. Ongelooflijk
                        wat het personeel aangaat, zéér vlug en als je het
                        laatste van je glas wijn had uitgedronken waren ze
                        daar om het te vullen, deze mensen verdienen 10
                        sterren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* REVIEW CARD */}
            </div>
          </div>
          {/* REVIEWS */}
        </div>
        {/* RESERVATION CARD */}
        <div className="w-[27%] relative text-reg">
          <div className="fixed w-[15%] bg-white rounded p-3 shadow">
            <div className="text-center text-black border-b pb-2 font-bold">
              <h4 className="mr-7 text-lg">Reserveer nu</h4>
            </div>
            <div className="my-3 flex flex-col text-black">
              <label htmlFor="">
                Aantal Personen
              </label>
              <select name="" className="py-3 border-b font-light bg-white" id="">
                <option value="">1 persoon</option>
                <option value="">2 personen</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[48%] text-black">
                <label htmlFor="">Datum</label>
                <input type="text" className="py-3 border-b font-light w-28 bg-white" />
              </div>
              <div className="flex flex-col w-[48%] text-black">
                <label htmlFor="">Tijd</label>
                <select name="" className="py-3 border-b font-light bg-white" id="">
                  <option value="">19:30</option>
                  <option value="">20:30</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
            <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">Reserveer</button>
          </div>
          </div>
        </div>
        {/* RESERVATION CARD */}
      </div>
      {/* DESCRIPTION PORTION */}
    </main>
  </main>
    )
}