import { useState } from 'react';
import './App.css';

const BinaryComponent = ({binary, setBinary}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const lastTyped = value[value.length -1];
    if ((lastTyped === "0" || lastTyped === "1" || value === "") 
        && value.length <= 8){
      setBinary(value);
    }
  }
  return (
    <>
      <input type="text" placeholder='binary' value={binary} onChange={handleChange} />
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
      <BinaryComponent binary={binary} setBinary={setBinary} />
      <DecimalComponent binary={binary} />
    </div>
  );
}

export default App;
