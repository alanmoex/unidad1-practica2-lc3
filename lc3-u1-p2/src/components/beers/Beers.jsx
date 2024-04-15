import AllBeers from "../allBeers/AllBeers";
import AvailableBeers from "../availableBeers/AvailableBeers";
import BeerStyles from "../beerStyles/BeerStyles";
import CountStyles from "../countSyles/CountStyles";
import ChangeDollar from "../changeDollar/ChangeDollar";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Beers = () => {
  const [dollarValue, setDollarValue] = useState(1);

  const saveDollarValueHandler = (enteredDollarValue) => {
    setDollarValue(enteredDollarValue);
  };

  const beers = [
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

  return (
    <>
      <div>
        <ChangeDollar
          onDollarValue={saveDollarValueHandler}
          dollarValue={dollarValue}
        ></ChangeDollar>
        <Button>Esconder componente</Button>
        <h2 className="d-flex justify-content-center">Todas las birras</h2>
        <AllBeers beers={beers} />
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Birras disponibles</h2>
        <AvailableBeers beers={beers} />
      </div>
      <div>
        <h2 className="d-flex justify-content-center">
          Cantidad de ipas y red
        </h2>
        <div className="d-flex justify-content-center">
          <CountStyles beers={beers} />
        </div>
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Estilos que tenemos</h2>
        <div className="d-flex justify-content-center">
          <BeerStyles beers={beers} />
        </div>
      </div>
    </>
  );
};

export default Beers;

Beers.propTypes = {
  dollarValue: PropTypes.number,
};
