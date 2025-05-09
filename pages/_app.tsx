import "@/styles/globals.css"
import Footer from "@/components/footer"
import Navbar from "../components/navbar"
import { ThemeProvider } from 'next-themes'
import { AppProvider } from "@/lib/context/AppContext" // AppProvider ni import qiling

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AppProvider>
        <Navbar />
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        <Footer />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp