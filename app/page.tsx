import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            Tafel Klaar
          </a>
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
          {/* SEARCHBAR */}
        </div>
        {/* HEADER */}
      </main>
    </main>
  );
}
