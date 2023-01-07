import "../styles/globals.css"
import type { AppProps } from "next/app"
import AppContextProvider from "../src/components/AppContext"

const App = ({ Component, pageProps, ...otherProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} {...otherProps} />
    </AppContextProvider>
  )
}

export default App
