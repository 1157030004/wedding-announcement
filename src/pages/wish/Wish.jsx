import {useState, useEffect} from "react"
import axios from "axios"
import Wishboard from "../../components/wishboard/Wishboard"
import "./wish.css"


const Wish = () => {
    const [wishes, setWishes] = useState([])

    useEffect(() => {
        const fetchWishes = async ()  =>{
            const res = await axios.get("/wishes");
            setWishes(res.data);
        }
        fetchWishes();
    }, [])

    return (
        <div className="wish">
            <Wishboard wishes={wishes} />
        </div>
    )
}

export default Wish
