import { Footer, Navbar } from "@/components"
import"bootstrap/dist/css/bootstrap.css"
import"@/styles/globals.css"
export default function App({ Component, pageProps }) {
  return ( 
    <div className="min-vh-100 d-flex flex-column justify-content-between ">
    <Navbar/>
        <Component {...pageProps} />
    <Footer/>
    </div>
  )
}
