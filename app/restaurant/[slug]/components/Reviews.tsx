function Reviews() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5 text-black">
        Wat vinden 100 personen van dit restaurant
      </h1>
      <div>
        <div className="border-b pb-7 mb-7">
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">MJ</h2>
              </div>
              <p className="text-black text-center">Micheal Jordan</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="flex mr-5 text-black">*****</div>
              </div>
              <div className="mt-5">
                <p className="text-light font-light text-black">
                  Beneden wat dicht bij elkaar maar wij zaten boven en daar
                  stonden de tafels ver van elkaar. Ongelooflijk wat het
                  personeel aangaat, zéér vlug en als je het laatste van je glas
                  wijn had uitgedronken waren ze daar om het te vullen, deze
                  mensen verdienen 10 sterren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
