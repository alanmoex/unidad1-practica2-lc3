import Beers from "./components/beers/Beers";
import ChangeDollar from "./components/changeDollar/ChangeDollar";

function App() {
  let dollarValue = 1;

  const saveDollarValueHandler = (enteredDollarValue) => {
    dollarValue = enteredDollarValue;
    console.log(dollarValue);
  };

  return (
    <>
      <ChangeDollar onDollarValue={saveDollarValueHandler} />
      <Beers dollarValue={dollarValue}></Beers>
    </>
  );
}

export default App;
