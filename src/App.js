import { useState } from 'react';
import './App.css';

const BinaryComponent = ({ binary, setBinary, maxLength }) => {
  let [errorTyped, setErrorTyped] = useState(false);
  let [errorLen, setErrorLen] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    const lastTyped = value[value.length - 1];
    /** Only allow 0,1 or empty ; with a max length = 8 */
    setErrorLen(!(value.length <= parseInt(maxLength)));
    setErrorTyped(!(lastTyped === "0" || lastTyped === "1" || value === ""))
    if ((lastTyped === "0" || lastTyped === "1" || value === "")
      && value.length <= parseInt(maxLength)) {
      setBinary(value);
      setErrorTyped(false);
    }
  }
  return (
    <>
      <input type="text" value={binary} onChange={handleChange} aria-label="Write binary number" />
      {errorTyped && ! errorLen &&
        <div className='error'>
          Not a <strong>0</strong> or a <strong>1</strong>
        </div>}
      {errorLen &&
        <div className='error'>
          Max 8 caracters
        </div>}
      {!errorTyped && !errorLen && <div className='description'>Write a 0 or a 1</div>}
    </>
  )
}

const DecimalComponent = ({ binary }) => {
  const decimal = () => {
    let result = 0;
    let mult = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
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
      <header>
        <h1>Bin2Dec</h1>
        <h2>Binary to Decimal converter</h2>
      </header>
      <div id='container'>
        <div id='binaryContainer' className='block'>
          <span className='titleComponent'>Binary </span>
          <BinaryComponent binary={binary} setBinary={setBinary} maxLength="8" />
        </div>
        <div id='decimalContainer' className='block'>
          <span className='titleComponent'>to Decimal</span>
          <div id="decimalComponent">
            <DecimalComponent binary={binary} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
