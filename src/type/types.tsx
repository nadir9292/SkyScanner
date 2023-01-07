export type NavBarProps = {
  title: string
}

export type LayoutProps = {
  title: string
  children: any
}

export type ButtonProps = {
  variant: any
  size: any
  otherProps: any
}

export type AirportQuery = {
  city: string
}

export type UseAirportApiProps = {
  method: string
  args: string
  query: string
}

export type UseFlightApiProps = {
  method: string
  args: string
  origin: string
  destination: string
  date: string
  returnDate?: string
  adults?: string
  currency?: string
  countryCode?: string
  market?: string
  filter: string
}

export type UseFlightDetailsApi = {
  method: string
  args: string
  itineraryId: string
  legs: string
  adults?: string
  currency?: string
  countryCode?: string
  market?: string
}

export type AiportItem = {
  PlaceId: string
  CityName: string
  CountryName: string
  PlaceName: string
}

export type FlightItem = {
  id: string
  price: {
    amount: number
  }
  score: number
  totalDuration: number
  legs: LegsDetails
}

export type FlightDetails = {
  legs: LegsDetails
  pricingOptions: {
    totalPrice: number
  }
}

export type LegsDetails = [
  {
    origin: {
      display_code: string
      city?: string
    }
    destination: {
      display_code: string
      city?: string
    }
    departure: string
    arrival?: string
    duration?: string
  },
  {
    origin: {
      display_code: string
      city?: string
    }
    destination: {
      display_code: string
      city?: string
    }
    departure: string
    arrival?: string
    duration?: string
  }
]

export type Legs = [
  {
    origin: string
    destination: string
    date: string
  },
  {
    origin2: string
    destination2: string
    date2: string
  }
]
