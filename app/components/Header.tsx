import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="h-64 bg-gradient-to-r from-[#3766df] to-[#41517e] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white md:text-5xl text-2xl font-bold mb-2">
          Zoek en boek je tafel
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
