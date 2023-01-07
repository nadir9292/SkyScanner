import Link from "next/link"
import { NavBarProps } from "../type/types"
import Button from "./Button"

const NavBar = (props: NavBarProps) => {
  const { title } = props

  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl sm:truncate flex items-center p-2 hover:scale-105 hover:text-gray-900">
          {title}
        </h1>
      </Link>
      <div>
        <Link href="/searchFlights">
          <Button type="button" variant="secondary" size="lg">
            Search flights
          </Button>
        </Link>
        {/* <Link href="/favory">
          <Button type="button" variant="primary" size="lg">
            <h1 className="font-bold text-zinc-200 sm:text-3xl sm:truncate flex items-center hover:scale-105 hover:text-zinc-300">
              ⭐
            </h1>
          </Button>
        </Link> */}
      </div>
    </div>
  )
}

export default NavBar
