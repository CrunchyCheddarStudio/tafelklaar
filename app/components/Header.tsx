"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
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
  );
}

export default Header;
