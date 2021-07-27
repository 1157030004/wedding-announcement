import "./wishboard.css"

const Wishboard = ({wishes}) => {
    console.log(wishes)
    return (
        <>
        {wishes.map(w =>(
            <WishItem  wish={w}/>
        ))}
        </>
    )
}

const WishItem = ({wish}) =>{
    return(
        <div className="wishboard">
        <div className="wishboardText">
            <span className="nameWishboard">{wish.name}</span>
            <p className="descWishboard">{wish.desc}</p>
        </div>
    </div>
    )
}

export default Wishboard
