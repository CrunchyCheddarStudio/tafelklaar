import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <div>
              <h3 className="font-bold text-black">U bent bijna klaar!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-p/12/3c/87/f6/de-muizelmolen.jpg"
                  alt=""
                  className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold text-black">
                    De Muizelmolen
                  </h1>
                  <div className="flex mt-3">
                    <p className="mr-6 text-black">Dinsdag, 22, 2023</p>
                    <p className="mr-6 text-black">19:30</p>
                    <p className="mr-6 text-black">3 personen</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER */}
            {/* FORM */}
            <div className="mt-10 flex flex-wrap justify between w-[660px]">
              <input
                type="text"
                placeholder="Naam"
                className="border rounded p-3 w-80 mb-4 bg-white"
              />
              <input
                type="text"
                placeholder="Voornaam"
                className="border rounded p-3 w-80 mb-4 bg-white"
              />
              <input
                type="text"
                placeholder="Mobiel nummer"
                className="border rounded p-3 w-80 mb-4 bg-white"
              />
              <input
                type="text"
                placeholder="Email"
                className="border rounded p-3 w-80 mb-4 bg-white"
              />
              <input
                type="text"
                placeholder="Gelegenheid (optioneel)"
                className="border rounded p-3 w-80 mb-4 bg-white"
              />
              <input
                type="text"
                placeholder="Verzoeken (optioneel)"
                className="border rounded p-3 w-80 mb-4 bg-white"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Reserveer nu
              </button>
              <p className="text-sm mt-4 text-black">
                Door op "Nu reserveren" te klikken, gaat u akkoord met de
                gebruiksvoorwaarden en het privacybeleid van Tafel Klaar.
              </p>
            </div>
            {/* FORM */}
          </div>
        </div>
      </main>
    </main>
  );
}
