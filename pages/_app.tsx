import "@/styles/globals.css"
import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from 'next-themes'
import { AppProvider } from "@/lib/context/AppContext" // AppProvider ni import qiling
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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