"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
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
  );
}

export default SearchBar;
