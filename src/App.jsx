import Router from "./routes/Routes"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FootLinks from "./components/FootLinks"
import { Toaster } from "react-hot-toast";
import './app.css'
import "./styles/app.scss";

function App() {
  return (
    < >
      <Header />
      <Navbar/>
      <Router />
      <Footer />
      <FootLinks />
      <Toaster />
    </>
  )
}

export default App
