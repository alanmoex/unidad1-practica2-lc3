//import PropTypes from "prop-types";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

function NewBeer(onNewBeerSaved) {
  const [enteredBeerName, setEnteredBeerName] = useState("");
  const [enteredBeerStyle, setEnteredBeerStyle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredAvailability, setEnteredAvailability] = useState(false);

  const changeBeerNameHandler = (event) => {
    setEnteredBeerName(event.target.value);
  };
  const changeBeerStyleHandler = (event) => {
    setEnteredBeerStyle(event.target.value);
  };
  const changePriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const changeAvailabilityHandler = (event) => {
    setEnteredAvailability(event.target.value);
  };

  const sumbitBeerHandler = (event) => {
    event.preventDefault();

    const newBeer = {
      id: null,
      beerName: enteredBeerName,
      beerStyle: enteredBeerStyle,
      price: enteredPrice,
      available: enteredAvailability,
    };

    onNewBeerSaved(newBeer);
  };

  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={sumbitBeerHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookTitle">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre de cerveza"
                  onChange={changeBeerNameHandler}
                  value={enteredBeerName}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookAuthor">
                <Form.Label>Estilo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar estilo"
                  onChange={changeBeerStyleHandler}
                  value={enteredBeerStyle}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookRating">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  onChange={changePriceHandler}
                  placeholder="Ingresar precio"
                  min={1}
                  value={enteredPrice}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookPageCount">
                <Form.Label>Disponibilidad</Form.Label>
                <Form.Switch
                  onChange={changeAvailabilityHandler}
                  value={enteredAvailability}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Agregar cerveza
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

NewBeer.propTypes = {};

export default NewBeer;
