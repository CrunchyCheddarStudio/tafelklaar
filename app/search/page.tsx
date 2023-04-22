import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Search(){
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
        <NavBar />
      {/* NAVBAR */}
      {/* HEADER */}
      <div className="bg-gradient-to-r to-[#3766df] from-[#41517e] p-2">
        {/* SEARCHBAR */}
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <input
            className="rounded mr-3 p-2 w-[450px] bg-white text-black border-blue-400 border-2"
            type="text"
            placeholder="Provincie, Stad of Restaurant"
          />
          <button className="bg-red-600 px-9 py-2 rounded">Zoek nu</button>
        </div>
        {/* HEADER */}
        {/* SEARCHBAR SIDE BAR */}
      </div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="text-black mb-2">Regio</h1>
            <p className="font-light text-reg text-black">Hulste</p>
            <p className="font-light text-reg text-black">Kortrijk</p>
            <p className="font-light text-reg text-black">Brugge</p>
            <p className="font-light text-reg text-black">Antwerpen</p>
            <p className="font-light text-reg text-black">Gent</p>
            <p className="font-light text-reg text-black">Sint-Niklaas</p>
            <p className="font-light text-reg text-black">Heule</p>
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="text-black mb-2">Keuken</h1>
            <p className="font-light text-reg text-black">Mexicaans</p>
            <p className="font-light text-reg text-black">Frans</p>
            <p className="font-light text-reg text-black">Chinees</p>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Prijs</h1>
            <div className="flex">
              <button className="border w-full text-reg rounded-l p-2 text-black ">
                $
              </button>
              <button className="border-r border-t border-b w-full text-reg p-2 text-black ">
                $$
              </button>
              <button className="border-r border-t border-b w-full text-reg p-2 text-black rounded-r ">
                $$$
              </button>
            </div>
          </div>
        </div>
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESTAURANT CARD */}
          <div className="border-b flex pb-5">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-p/12/3c/87/f6/de-muizelmolen.jpg"
              alt=""
              className="w-44 rounded"
            />
            <div className="pl-5">
              <h2 className="text-3xl text-black">De Muizelmolen</h2>
              <div className="flex items-start">
                <div className="flex mb-2 text-black">*****</div>
                <p className="ml-2 text-sm text-black">Perfect</p>
              </div>
              <div className="mb-9">
                <div className="font-light flex text-reg">
                  <p className="mr-4 text-black">$$$</p>
                  <p className="mr-4 text-black">Mexicaans</p>
                  <p className="mr-4 text-black">Hulste</p>
                </div>
              </div>
              <div className="text-red-600">
                <a href="">Meer informatie</a>
              </div>
            </div>
          </div>
          {/* RESTAURANT CARD */}
        </div>
      </div>
    </main>
  </main>
    )
}