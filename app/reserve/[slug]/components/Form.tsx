function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify between w-[660px]">
      <input
        type="text"
        placeholder="Naam"
        className="border rounded p-3 w-80 mb-4 bg-white"
      />
      <input
        type="text"
        placeholder="Voornaam"
        className="border rounded p-3 w-80 mb-4 bg-white"
      />
      <input
        type="text"
        placeholder="Mobiel nummer"
        className="border rounded p-3 w-80 mb-4 bg-white"
      />
      <input
        type="text"
        placeholder="Email"
        className="border rounded p-3 w-80 mb-4 bg-white"
      />
      <input
        type="text"
        placeholder="Gelegenheid (optioneel)"
        className="border rounded p-3 w-80 mb-4 bg-white"
      />
      <input
        type="text"
        placeholder="Verzoeken (optioneel)"
        className="border rounded p-3 w-80 mb-4 bg-white"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Reserveer nu
      </button>
      <p className="text-sm mt-4 text-black">
        Door op "Nu reserveren" te klikken, gaat u akkoord met de
        gebruiksvoorwaarden en het privacybeleid van Tafel Klaar.
      </p>
    </div>
  );
}

export default Form;
