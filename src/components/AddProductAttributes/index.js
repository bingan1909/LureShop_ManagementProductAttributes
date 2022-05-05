import React from "react";
import DataProvider from "../../dataProvider";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function AddProductAttributes() {
  let nagative = useNavigate();

  const handleAddProductAttributes = (event) => {
    event.preventDefault();
    let id = event.currentTarget["0"].value;
    let name = event.currentTarget["1"].value;
    let description = event.currentTarget["3"].value;
    let color = event.currentTarget["4"].value;
    let price = event.currentTarget["5"].value;
    let count = event.currentTarget["6"].value;
    let data = {
      id: id,
      title: name,
      image:
        "https://thuysinh4u.com/wp-content/uploads/2020/11/Ca-ba-duoi.jpg",
      description: description,
      color: color,
      price: price,
      count: count,
    };
    DataProvider.push(data);
    nagative("/");
  };

  return (
    <Container>
      <h3>Add Product Attribute</h3>
      <Form onSubmit={handleAddProductAttributes}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridID">
            <Form.Label>ID:</Form.Label>
            <Form.Control placeholder="Enter ID" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder="Eter Name" />
          </Form.Group>
        </Row>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" style={{height: 200}} placeholder="Enter Description" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridColor">
            <Form.Label>Color:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Choose Color</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
              <option value="Orange">Orange</option>
              <option value="Pink">Pink</option>
              <option value="Gray">Gray</option>
              <option value="Red">Red</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control placeholder="Eter Price" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCount">
            <Form.Label>Count:</Form.Label>
            <Form.Control placeholder="Eter Count" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </Container>
  );
}

export default AddProductAttributes;
