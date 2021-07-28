import { useState } from "react"
import axios from "axios"
import "./doa.css"

const Doa = () => {
    const [name, setName] = useState("")
    const [doa, setDoa] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("https://darisna.herokuapp.com/api/wishes", {
                name,
                desc: doa
            })
            window.location.replace("/wishboard")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="doa">
            <form className="doaForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="nameInput"
                placeholder="Nama..."
                onChange={e => setName(e.target.value)}
                />
            <textarea 
                type="text" 
                className="doaInput"
                placeholder="Doa..."
                onChange={e => setDoa(e.target.value)}
                />
            <button className="doaButton" type="submit">Kirim</button>
            </form>
        </div>
    )
}

export default Doa
