import { FlightItem } from "../type/types"

interface FlightProps {
  flight: FlightItem
}

const Flight: React.FC<FlightProps> = ({ flight }) => {
  return (
    <div className="overflow-hidden bg-white rounded my-4 drop-shadow-lg hover:scale-110">
      <div className="px-4 py-5 sm:px-6 my-2">
        <h1 className="text-lg font-medium leading-6 text-gray-900">
          Price : {flight.price.amount}€
        </h1>
        <div className="border-t border-gray-200">
          <dl>
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Duration : {(flight.totalDuration / 60).toFixed()}h
            </h1>
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Score : {flight.score}
            </h1>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Flight
