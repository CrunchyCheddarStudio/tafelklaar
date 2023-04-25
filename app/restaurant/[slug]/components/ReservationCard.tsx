"use client";

function ReservationCard() {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center text-black border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Reserveer nu</h4>
      </div>
      <div className="my-3 flex flex-col text-black">
        <label htmlFor="">Aantal Personen</label>
        <select name="" className="py-3 border-b font-light bg-white" id="">
          <option value="">1 persoon</option>
          <option value="">2 personen</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%] text-black">
          <label htmlFor="">Datum</label>
          <input
            type="text"
            className="py-3 border-b font-light w-28 bg-white"
          />
        </div>
        <div className="flex flex-col w-[48%] text-black">
          <label htmlFor="">Tijd</label>
          <select name="" className="py-3 border-b font-light bg-white" id="">
            <option value="">19:30</option>
            <option value="">20:30</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Reserveer
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
