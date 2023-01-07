import { UseFlightApiProps } from "../type/types"

const UseFlightApi = (props: UseFlightApiProps) => {
  const options = {
    method: props.method,
    url: process.env.NEXT_PUBLIC_API_BASE_URL + props.args,
    params: {
      origin: props.origin,
      destination: props.destination,
      date: props.date,
      returnDate: props.returnDate,
      adults: props.adults,
      currency: props.currency,
      countryCode: props.countryCode,
      market: props.market,
      filter: props.filter,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "X-RapidAPI-Key": "c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf",
      "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
    },
  }

  return options
}

export default UseFlightApi
