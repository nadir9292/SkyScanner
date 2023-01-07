import axios from "axios"
import Link from "next/link"
import { useContext, useState } from "react"
import Button from "../src/components/Button"
import Flight from "../src/components/Flight"
import Layout from "../src/components/Layout"
import UseFlightApi from "../src/services/UseFlightApi"
import { FlightItem, UseFlightApiProps } from "../src/type/types"
import { AppContext } from "../src/components/AppContext"

const SearchFlights = () => {
  const [flights, setFlights] = useState<FlightItem[]>([])
  const { saveId, saveLegs } = useContext(AppContext)

  const getFlights = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const props: UseFlightApiProps = {
      method: "GET",
      args: "/searchFlights",
      origin: e.target.origin.value,
      destination: e.target.destination.value,
      date: e.target.date.value,
      returnDate: e.target.returnDate.value,
      adults: e.target.adults.value,
      currency: "EUR",
      countryCode: "FR",
      market: "fr-FR",
      filter: "price",
    }
    axios
      .request(UseFlightApi(props))
      .then(function (response) {
        setFlights(response.data.data.slice(0, 20))
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  const getFlightId = (
    id: string,
    origin: string,
    destination: string,
    date: string,
    origin2: string,
    destination2: string,
    date2: string
  ) => {
    saveId(id)
    const legs = [
      {
        origin: origin,
        destination: destination,
        date: date.slice(0, 10),
      },
      {
        origin: origin2,
        destination: destination2,
        date: date2.slice(0, 10),
      },
    ]
    saveLegs(legs)
  }

  return (
    <>
      <Layout title="SKYSCANNER">
        <div className="flex justify-center">
          <div className="mt-10">
            <form onSubmit={getFlights}>
              <h1 className="flex justify-center mb-4 text-4xl font-bold tracking-tight">
                Search Flight
              </h1>
              <div className="mb-3 grid gap-4">
                <div className="flex justify-between">
                  <input
                    required
                    name="origin"
                    className="mx-2 p-3 rounded border-2"
                    type="text"
                    placeholder="origin..."
                  />
                  <input
                    required
                    name="destination"
                    className="mx-2 p-3 rounded border-2"
                    type="text"
                    placeholder="destination..."
                  />
                </div>
                <div className="flex justify-between">
                  <input
                    required
                    name="date"
                    className="mx-2 p-3 rounded border-2"
                    type="date"
                    placeholder="date..."
                  />
                  <input
                    required
                    name="returnDate"
                    className="mx-2 p-3 rounded border-2"
                    type="date"
                    placeholder="returnDate..."
                  />
                </div>
                <input
                  required
                  name="adults"
                  className="mx-2 p-3 rounded border-2"
                  type="number"
                  placeholder="passager..."
                />
                <div>
                  <Button type="submit" variant="btnValidation" size="lg">
                    Search
                  </Button>
                </div>
              </div>
            </form>
            {flights.map((flight) => (
              <Link
                onClick={() =>
                  getFlightId(
                    flight.id,
                    flight.legs[0].origin.display_code,
                    flight.legs[0].destination.display_code,
                    flight.legs[0].departure,
                    flight.legs[1].origin.display_code,
                    flight.legs[1].destination.display_code,
                    flight.legs[1].departure
                  )
                }
                key={flight.id}
                href={{
                  pathname: `../../detailsFlight/${flight.id}`,
                }}
              >
                <Flight key={flight.id} flight={flight} />
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SearchFlights
