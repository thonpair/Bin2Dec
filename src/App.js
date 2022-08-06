import './App.css';

const BinaryComponent = () => {
  return (<>Binary</>)
}

const DecimalComponent = () => {
  return (<>Decimal</>)
}


function App() {

  return (
    <div className="App">
      <BinaryComponent />
      <DecimalComponent />
    </div>
  );
}

export default App;
