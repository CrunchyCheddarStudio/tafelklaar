import Link from "next/link";

function RestaurantCard() {
  return (
    <div className="border-b flex pb-5">
      {/* <Link href="restaurant/demuizelmolen"> */}
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-p/12/3c/87/f6/de-muizelmolen.jpg"
          alt=""
          className="w-44 rounded"
        />
        <div className="pl-5">
          <h2 className="text-3xl text-black">De Muizelmolen</h2>
          <div className="flex items-start">
            <div className="flex mb-2 text-black">*****</div>
            <p className="ml-2 text-sm text-black">Perfect</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4 text-black">$$$</p>
              <p className="mr-4 text-black">Mexicaans</p>
              <p className="mr-4 text-black">Hulste</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href="/restaurant/burgerking">Meer informatie</Link>
          </div>
        </div>
     {/* </Link> */}
    </div>
  );
}

export default RestaurantCard;
