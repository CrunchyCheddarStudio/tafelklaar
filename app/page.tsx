import Link from "next/link";
import { Inter } from "@next/font/google";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        {/* CARDS */}
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          {/* CARD */}
          <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer ">
            <Link href="/restaurant/tpopulierenhof">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-f/0b/d2/d6/d9/photo0jpg.jpg"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2 text-black">
                  'T Populierenhof
                </h3>
                <div className="flex items-start text-black">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">88 reviews</p>
                </div>
                <div className="flex text-black text-reg font-light capitalize">
                  <p className="mr-3">Belgisch, Europees</p>
                  <p className="mr-3">$$$$</p>
                  <p>Hulste</p>
                </div>
                <p className="text-sm mt-1 text-black font-bold">
                  3 Boekingen vandaag
                </p>
              </div>
            </Link>
          </div>
          {/* CARD */}
        </div>
        {/* CARDS */}
      </main>
    </main>
  );
}

export default Home;
