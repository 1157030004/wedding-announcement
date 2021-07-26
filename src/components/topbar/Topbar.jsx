import { Link } from "react-router-dom"
import "./topbar.css"

const Topbar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <div className="iconLeft">DarIsna.</div>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/wishboard">Wishboard</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight"></div>
        </div>
    )
}

export default Topbar
