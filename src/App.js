import React from "react";
import Counter from "./features/Counter/counter";
import Coin from "./features/Coin/coin";
import Theme from "./features/Theme/theme";
const App = () => {
  return (
    <>
      <div className="whole">
        <Counter />
        <Coin />
        <Theme/>
      </div>
    </>

  )
}

export default App;