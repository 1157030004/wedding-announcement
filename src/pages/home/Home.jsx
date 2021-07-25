import Ayat from "../../ayat/Ayat"
import Countdown from "../../countdown/Countdown"
import Doa from "../../doa/Doa"
import Family from "../../Family/Family"
import Header from "../../header/Header"
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
