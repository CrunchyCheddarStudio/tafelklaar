import Link from "next/link"

function RestaurantNavBar() {
    return(
        <nav className="flex text-reg border-b pb-2 text-black font-bold">
        <Link href="/restaurant/tpopulierenhof" className="mr-7">
          Overzicht
        </Link>
        <Link href="/restaurant/tpopulierenhof/menu" className="mr-7">
          Menu
        </Link>
      </nav>
    )
}

export default RestaurantNavBar