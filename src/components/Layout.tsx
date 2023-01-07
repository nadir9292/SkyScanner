import Head from "next/head"
import { LayoutProps } from "../type/types"
import NavBar from "./NavBar"

const Layout = (props: LayoutProps) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <NavBar title={title}></NavBar>
      </header>
      <main className="flex justify-center">{children}</main>
    </>
  )
}

export default Layout
