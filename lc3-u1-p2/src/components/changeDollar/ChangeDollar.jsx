import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ChangeDollar = ({ onDollarValue, dollarValue }) => {
  const changeDollarHandler = (event) => {
    onDollarValue(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="m-4 w-20" bg="success">
        <Card.Body>
          <input
            type="number"
            onChange={changeDollarHandler}
            value={dollarValue}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChangeDollar;

ChangeDollar.propTypes = {
  onDollarValue: PropTypes.any,
  dollarValue: PropTypes.number,
};
