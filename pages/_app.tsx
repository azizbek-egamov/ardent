import "@/styles/globals.css"
import Footer from "@/components/footer"
import Navbar from "../components/navbar"
import { AppProvider } from "@/lib/context/AppContext" // AppProvider ni import qiling

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </AppProvider>
  )
}

export default MyApp