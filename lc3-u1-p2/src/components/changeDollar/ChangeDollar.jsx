import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const ChangeDollar = ({ onDollarValue }) => {
  const [enteredDollar, setEnteredDollar] = useState("");

  const ChangeDollarHandler = (event) => {
    setEnteredDollar(event.target.value);
  };

  const submitDollarHandler = (event) => {
    event.preventDefault();

    const dollarValue = enteredDollar;

    onDollarValue(dollarValue);
    setEnteredDollar(0);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="m-4 w-20" bg="success">
        <Card.Body>
          <Form className="text-white" onSubmit={submitDollarHandler}>
            <Form.Group className="mb-3" controlId="changeDollar">
              <Form.Label>Nuevo valor de dolar:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar valor de dolar"
                onChange={ChangeDollarHandler}
                value={enteredDollar}
              />
            </Form.Group>
            <Button type="submit">Cambiar valor del dolar</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChangeDollar;

ChangeDollar.propTypes = {
  onDollarValue: PropTypes.any,
};
