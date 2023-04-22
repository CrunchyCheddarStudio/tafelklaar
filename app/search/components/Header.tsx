function Header() {
  return (
    <div className="bg-gradient-to-r to-[#3766df] from-[#41517e] p-2">
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input
          className="rounded mr-3 p-2 w-[450px] bg-white text-black border-blue-400 border-2"
          type="text"
          placeholder="Provincie, Stad of Restaurant"
        />
        <button className="bg-red-600 px-9 py-2 rounded">Zoek nu</button>
      </div>
    </div>
  );
}

export default Header;
