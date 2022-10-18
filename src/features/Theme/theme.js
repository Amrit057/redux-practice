import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";

const Theme = () =>{
    // const color = useSelector((state)=>state.theme.color)
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
     return(
        <>
        <div>
            <input type="text" onChange={(e)=>setColor(e.target.value)}/>
            <button onClick={()=>{dispatch(changeTextColor(color))}}>Change Text Color</button>
        </div>
        </>
    )
}

export default Theme;