function Header() {
  return (
    <div>
      <h3 className="font-bold text-black">U bent bijna klaar!</h3>
      <div className="mt-5 flex">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-p/12/3c/87/f6/de-muizelmolen.jpg"
          alt=""
          className="w-32 h-18 rounded"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-black">De Muizelmolen</h1>
          <div className="flex mt-3">
            <p className="mr-6 text-black">Dinsdag, 22, 2023</p>
            <p className="mr-6 text-black">19:30</p>
            <p className="mr-6 text-black">3 personen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
