function SearchSideBar() {
  return (
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="text-black mb-2">Regio</h1>
          <p className="font-light text-reg text-black">Hulste</p>
          <p className="font-light text-reg text-black">Kortrijk</p>
          <p className="font-light text-reg text-black">Brugge</p>
          <p className="font-light text-reg text-black">Antwerpen</p>
          <p className="font-light text-reg text-black">Gent</p>
          <p className="font-light text-reg text-black">Sint-Niklaas</p>
          <p className="font-light text-reg text-black">Heule</p>
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="text-black mb-2">Keuken</h1>
          <p className="font-light text-reg text-black">Mexicaans</p>
          <p className="font-light text-reg text-black">Frans</p>
          <p className="font-light text-reg text-black">Chinees</p>
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2">Prijs</h1>
          <div className="flex">
            <button className="border w-full text-reg rounded-l p-2 text-black ">
              $
            </button>
            <button className="border-r border-t border-b w-full text-reg p-2 text-black ">
              $$
            </button>
            <button className="border-r border-t border-b w-full text-reg p-2 text-black rounded-r ">
              $$$
            </button>
          </div>
        </div>
    </div>
  );
}

export default SearchSideBar;
