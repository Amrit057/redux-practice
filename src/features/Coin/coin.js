import { useSelector } from "react-redux";
const Coin = () => {
    const coin = useSelector((state) => state.counter.value)
    const newcolor = useSelector((state)=> state.theme.color)
    return (
        <>
            <div>
                <p style={{color: newcolor}}>Coin: {coin}</p>
            </div>
        </>
    )
}

export default Coin;