"use client";

import Link from "next/link";
import { Inter } from "@next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
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
        {/* HEADER */}
        <div className="h-64 bg-gradient-to-r from-[#3766df] to-[#41517e] p-2">
          <div className="text-center mt-10">
            <h1 className="text-white md:text-5xl text-2xl font-bold mb-2">
              Zoek en boek je tafel
            </h1>
            {/* SEARCHBAR */}
            <div className="text-left text-lg py-3 m-auto flex justify-center">
              <input
                className="rounded mr-3 p-2 w-[450px] bg-white text-black border-blue-400 border-2"
                type="text"
                placeholder="Provincie, Stad of Restaurant"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                className="bg-red-600 px-9 py-2 rounded"
                onClick={() => {
                  if (location === "banana") return;
                  router.push("/search");
                }}
              >
                Zoek nu
              </button>
            </div>
            {/* SEARCHBAR */}
          </div>
        </div>
        {/* HEADER */}
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

export default Home
