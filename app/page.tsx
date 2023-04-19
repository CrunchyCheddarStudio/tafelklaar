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
            {/* FORM */}
          </div>
        </div>
      </main>
    </main>
  );
}
