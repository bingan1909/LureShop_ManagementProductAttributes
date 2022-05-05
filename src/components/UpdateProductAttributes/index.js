import React, { useState, useEffect } from "react";
import DataProvider from "../../dataProvider";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function AddProductAttributes() {
  let nagative = useNavigate();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    setId(id);
    setTitle(DataProvider.find(x => x.id == id).title);
    setImage(DataProvider.find(x => x.id == id).image);
    setDescription(DataProvider.find(x => x.id == id).description);
    setColor(DataProvider.find(x => x.id == id).color);
    setPrice(DataProvider.find(x => x.id == id).price);
    setCount(DataProvider.find(x => x.id == id).count);
  }, []);

  const handleUpdateProductAttributes = (event) => {
    event.preventDefault();
    let objIndex = DataProvider.findIndex((obj => obj.id == id));
    DataProvider[objIndex].id = event.currentTarget["0"].value;
    DataProvider[objIndex].title = event.currentTarget["1"].value;
    DataProvider[objIndex].image = "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/279505426_1156360095166069_545149653531334398_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=lr0xq2BYY0cAX8xJcIo&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8Q8elndthgp7PMXwKSKKQjDDyyFssrn9OaBj4CpWYRpw&oe=62770F81";
    DataProvider[objIndex].description = event.currentTarget["3"].value;
    DataProvider[objIndex].color = event.currentTarget["4"].value;
    DataProvider[objIndex].price = event.currentTarget["5"].value;
    DataProvider[objIndex].count = event.currentTarget["6"].value;
    nagative("/");
  };
  return (
    <Container>
      <h3>Update Product Attribute</h3>
      <Form onSubmit={handleUpdateProductAttributes}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridID">
            <Form.Label>ID:</Form.Label>
            <Form.Control placeholder="Enter ID" defaultValue={id} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder="Eter Name" defaultValue={title} />
          </Form.Group>
        </Row>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" style={{height: 200}}  placeholder="Enter Description" defaultValue={description} />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridColor">
            <Form.Label>Color:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Choose Color</option>
              <option value="White" selected>White</option>
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
            <Form.Control placeholder="Eter Price" defaultValue={price} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCount">
            <Form.Label>Count:</Form.Label>
            <Form.Control placeholder="Eter Count" defaultValue={count} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          UPDATE
        </Button>
      </Form>
    </Container>
  );
}
export default AddProductAttributes;
