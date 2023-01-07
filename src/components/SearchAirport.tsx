import { AiportItem, UseAirportApiProps } from "../type/types"
import { useState } from "react"
import axios from "axios"
import UseApi from "../services/UseAirportApi"
import Button from "./Button"
import Airport from "./Airport"

const SearchAirport = () => {
  const [airports, setAirports] = useState<AiportItem[]>([])
  const [search, setSearch] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const props: UseAirportApiProps = {
    method: "GET",
    args: "/searchAirport",
    query: search,
  }
  const getAirports = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .request(UseApi(props))
      .then(function (response) {
        setAirports(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <div className="flex justify-center">
      <div className=" h-auto w-96 mt-10 grid grid-cols-1 gap-4">
        <form onSubmit={getAirports}>
          <div className="grid grid-rows-2 grid-flow-col gap-4 mb-3">
            <input
              onChange={handleChange}
              className="border-2 text-2xl border-gray-500 rounded p-2 text-gray-700 font-bold"
              type="text"
              placeholder="city or airport's name..."
              value={search}
            />
            <div>
              <Button type="submit" variant="btnValidation" size="lg">
                Search
              </Button>
            </div>
          </div>
        </form>
        {airports.map((airport) => (
          <Airport key={airport.PlaceId} airport={airport} />
        ))}
      </div>
    </div>
  )
}

export default SearchAirport
