import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
const Counter = () => {
    const value = useSelector((state) => state.counter.value)
    const newcolor = useSelector((state)=> state.theme.color)
    const dispatch = useDispatch()


    return (
        <>

            <div className="appp">
                <button onClick={() => { dispatch(increment()) }} >+</button>
                <p style={{color: newcolor}}>Count: {value}</p>
                <button onClick={() => { dispatch(decrement()) }}>-</button>
                <button onClick={() => { dispatch(incrementByAmount(5)) }}>Increment by 5</button>

            </div>

        </>
    )
}

export default Counter;