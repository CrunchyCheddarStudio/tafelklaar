function Images() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 text-black border-b pb-5">
        5 Foto's
      </h1>
      <div className="flex flex-wrap">
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://media-cdn.tripadvisor.com/media/photo-s/10/11/73/dd/photo0jpg.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://media-cdn.tripadvisor.com/media/photo-s/0b/d2/d6/dc/photo1jpg.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/d1/eb/68/t-populierenhof.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://media-cdn.tripadvisor.com/media/photo-l/0f/5b/1d/72/koude-visschotel-en-schotel.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/d1/eb/66/t-populierenhof.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
