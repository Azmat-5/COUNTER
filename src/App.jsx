
 import { useState } from "react";
 import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const addvalue = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetvalue = () => {
    setCounter(0);
  };
  return (
    <div>
  
<h1>COUNTER
</h1>
  <h2>counter:{counter}</h2>
<button onClick={addvalue}>
  add value
</button>
<button onClick={removevalue}>
  remove value
</button>
<button onClick={resetvalue}>reset</button>

    </div>
  )
}

export default App
