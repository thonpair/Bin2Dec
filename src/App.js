import { useState } from 'react';
import './App.css';

const BinaryComponent = ({binary, setBinary, maxLength}) => {
  let [errorTyped, setErrorTyped] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    const lastTyped = value[value.length -1];
    /** Only allow 0,1 or empty ; with a max length = 8 */
    if ((lastTyped === "0" || lastTyped === "1" || value === "") 
        && value.length <= parseInt(maxLength)){
      setBinary(value);
      setErrorTyped(false);
    } else {
      setErrorTyped(true);
    }
  }
  return (
    <>
      <input type="text" placeholder='binary' value={binary} onChange={handleChange} />
      {errorTyped && 
      <span className='error'>
        Not a <strong>0</strong> or a <strong>1</strong>
      </span>}
    </>
  )
}

const DecimalComponent = ({binary}) => {
  const decimal = () => {
    let result = 0;
    let mult = 1;
    for (let i = binary.length - 1; i >= 0 ; i--){
      result += parseInt(binary[i]) * mult;
      mult *= 2;
    }
    return result;
  };
  return (<>{decimal()}</>)
}


function App() {
  const [binary, setBinary] = useState("");
  return (
    <div className="App">
      <h1>Bin2Dec</h1>
      <h2>Binary to Decimal converter</h2>
      <div id='binaryContainer'>
        <span className='titleComponent'>Binary </span>
        <BinaryComponent binary={binary} setBinary={setBinary} maxLength="8" />
      </div>
      <div id='decimalContainer'>
        <span className='titleComponent'>to Decimal</span>
        <DecimalComponent binary={binary} />
      </div>
    </div>
  );
}

export default App;
