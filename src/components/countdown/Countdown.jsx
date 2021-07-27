import Timer from "react-countdown";
import "./countdown.css"

const Countdown = () => {
    var end = new Date('08/08/2021 10:1 AM');

    const renderer = ({days, hours, minutes, seconds, completed}) =>{
        if(completed){
            return <span>Time's up!</span>
        }else{
            return(
                <div className="timer">
                    <ul>
                        <li className="timerTime">{days}</li>
                        <li className="timerText">Hari</li>
                    </ul>
                    <ul>
                        <li className="timerTime">{hours}</li>
                        <li className="timerText">Jam</li>
                    </ul>
                    <ul>
                        <li className="timerTime">{minutes}</li>
                        <li className="timerText">Menit</li>
                    </ul>
                    <ul>
                        <li className="timerTime">{seconds}</li>
                        <li className="timerText">Detik</li>
                    </ul>
                </div>
            )
        }
    }

    return (
        <div className="countdown">
            <div className="openingCountdown">
                <p>Mengingat kondisi pandemi Covid-19 yang terjadi, tanpa mengurangi rasa hormat, kami mengharap do'a dan ridho dari Bapak/Ibu/Saudara/i untuk kami dari rumah masing-masing. Adapun prosesi akad insyaAllah dapat diikuti melalui akun Instagram kami:</p>
            </div> 
            <div className="socialCountdown">
                <i className="socialIcon fab fa-instagram"></i>
                <span>@darishusna</span>
                <span>@isnaromli90122</span>
            </div>

                <Timer date={end} renderer={renderer} daysInHours={false} />
        </div>
    )
}

export default Countdown
