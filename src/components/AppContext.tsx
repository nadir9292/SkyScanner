import { createContext, useCallback, useContext, useState } from "react"
import { Legs } from "../type/types"

export const AppContext = createContext(null)

const initialId: string = ""
const initialLegs: Legs = [
  {
    origin: "",
    destination: "",
    date: "",
  },
  {
    origin2: "",
    destination2: "",
    date2: "",
  },
]

const AppContextProvider = (props: any) => {
  const [itineraryId, setItineraryId] = useState(initialId)
  const [legs, setLegs] = useState(initialLegs)

  const saveId = useCallback((itineraryId: string) => {
    setItineraryId(itineraryId)
  }, [])

  const saveLegs = useCallback((legs: Legs) => {
    setLegs(legs)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ saveId, saveLegs, itineraryId, legs }}
    />
  )
}

export default AppContextProvider
