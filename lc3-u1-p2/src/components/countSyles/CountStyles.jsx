import PropTypes from "prop-types";

const CountStyles = ({ beers }) => {
  const ipaBeers = beers.filter((beer) => beer.beerStyle == "IPA").length;
  const redBeers = beers.filter((beer) => beer.beerStyle == "Red").length;

  return (
    <p>
      {" "}
      IPA: {ipaBeers} Red: {redBeers}
    </p>
  );
};

export default CountStyles;

CountStyles.propTypes = {
  beers: PropTypes.array,
};
