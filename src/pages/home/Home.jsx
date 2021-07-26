import Ayat from "../../components/ayat/Ayat"
import Countdown from "../../components/countdown/Countdown"
import Doa from "../../components/doa/Doa"
import Family from "../../components/family/Family"
import Header from "../../components/header/Header"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
          <Header />
          <Ayat />
          <Family />
          <Countdown />
          <Doa />
        </div>
    )
}

export default Home
