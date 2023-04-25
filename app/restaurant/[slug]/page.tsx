import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Ratings />
            <Description />
            <Images />
            <Reviews />
          </div>
          {/* RESERVATION CARD */}
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center text-black border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Reserveer nu</h4>
              </div>
              <div className="my-3 flex flex-col text-black">
                <label htmlFor="">Aantal Personen</label>
                <select
                  name=""
                  className="py-3 border-b font-light bg-white"
                  id=""
                >
                  <option value="">1 persoon</option>
                  <option value="">2 personen</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%] text-black">
                  <label htmlFor="">Datum</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28 bg-white"
                  />
                </div>
                <div className="flex flex-col w-[48%] text-black">
                  <label htmlFor="">Tijd</label>
                  <select
                    name=""
                    className="py-3 border-b font-light bg-white"
                    id=""
                  >
                    <option value="">19:30</option>
                    <option value="">20:30</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Reserveer
                </button>
              </div>
            </div>
          </div>
          {/* RESERVATION CARD */}
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
