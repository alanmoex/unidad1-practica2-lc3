import AllBeers from "../allBeers/AllBeers";
import AvailableBeers from "../availableBeers/AvailableBeers";
import BeerStyles from "../beerStyles/BeerStyles";
import CountStyles from "../countSyles/CountStyles";
import ChangeDollar from "../changeDollar/ChangeDollar";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "react-bootstrap";
import NewBeer from "../newBeer/NewBeer";

const Beers = () => {
  const [dollarValue, setDollarValue] = useState(1);
  const [showComponent, setShowComponent] = useState(false);
  const [buttonDolarText, setButtonDolarText] = useState("ocultar");

  const saveDollarValueHandler = (enteredDollarValue) => {
    setDollarValue(enteredDollarValue);
  };

  const showComponentHandler = () => {
    setShowComponent(!showComponent);
    showComponent
      ? setButtonDolarText("ocultar")
      : setButtonDolarText("mostrar");
  };

  let beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3 * dollarValue,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4 * dollarValue,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4 * dollarValue,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3 * dollarValue,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3 * dollarValue,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3 * dollarValue,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1 * dollarValue,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2 * dollarValue,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5 * dollarValue,
      available: false,
    },
  ];

  const [beersArray, setBeersArray] = useState(beers);

  const saveNewBeerHandler = (enteredNewBeer) => {
    const newBeer = {
      ...enteredNewBeer,
      id: Math.random().toString(),
    };
    setBeersArray([...beersArray, newBeer]);
  };

  return (
    <>
      <div hidden={showComponent}>
        <ChangeDollar
          onDollarValue={saveDollarValueHandler}
          dollarValue={dollarValue}
        ></ChangeDollar>
      </div>
      <div className="d-flex justify-content-center">
        <Button onClick={showComponentHandler}>{buttonDolarText}</Button>
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Todas las birras</h2>
        <AllBeers beers={beersArray} />
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Birras disponibles</h2>
        <AvailableBeers beers={beersArray} />
      </div>
      <div>
        <h2 className="d-flex justify-content-center">
          Cantidad de ipas y red
        </h2>
        <div className="d-flex justify-content-center">
          <CountStyles beers={beersArray} />
        </div>
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Estilos que tenemos</h2>
        <div className="d-flex justify-content-center">
          <BeerStyles beers={beersArray} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <NewBeer onNewBeerSaved={saveNewBeerHandler} />
      </div>
    </>
  );
};

export default Beers;

Beers.propTypes = {
  dollarValue: PropTypes.number,
};
