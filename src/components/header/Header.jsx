import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Pernikahan</span>
                <span className="headerTitleLg">Daris Al-Husna</span>
                <span className="headerTitleLg">&</span>
                <span className="headerTitleLg">Nur Isnaini Romli</span>


            <div className="headerDeck">
                <div className="deckItem">
                    <p className="deckItemTitle">Akad</p>
                    <p className="deckItemDesc">8 Agustus 2021</p>
                    <p className="deckItemDesc">8.00 - 9.00</p>
                </div>
                <div className="deckItem">
                    <p className="deckItemTitle">Lokasi</p>
                    <i class="fab fa-instagram"></i>
                    <p className="deckItemDesc">Live Instagram</p>
                </div>
            </div>

            </div>

        </div>
    )
}

export default Header
