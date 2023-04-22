import Link from "next/link";

function NavBar() {
    return(
          <nav className="bg-white p-2 flex justify-between">
    <Link href="/" className="font-bold text-gray-700 text-2xl">
      Tafel Klaar
    </Link>
    <div>
      <div className="flex">
        <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
          Log in
        </button>
        <button className="text-black border p-1 px-4 rounded">Log uit</button>
      </div>
    </div>
  </nav>
    )

}

export default NavBar;
