import React from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Table,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataProvider from "../../dataProvider";
import "./index.css";

export default function ProductAttributes() {
  let nagative = useNavigate();

  const handleAddProductAttributes = () => {
    nagative("/add-product");
  };

  const handleUpdateProductAttributes = (id) => {
    nagative(`/update-product?id=${id}`);
  };

  const popoverDelete = (id) => {
    return (
      <Popover id="popover-basic">
        <Popover.Header>Are you sure you want to delete?</Popover.Header>
        <Popover.Body className="text-center">
          <Button variant="secondary" size="sm" className="me-2">
            &nbsp;No&nbsp;
          </Button>
          <Button onClick={() => hanleDeleteProductAttributes(id)} variant="primary" size="sm" className="me-2">
            &nbsp;Yes&nbsp;
          </Button>
        </Popover.Body>
      </Popover>
    );
  };

  const hanleDeleteProductAttributes = (id) => {
    let objIndex = DataProvider.findIndex((obj => obj.id == id));
    DataProvider.splice(objIndex , 1);
    nagative("/");
  };

  return (
    <Container>
      <h3>Management Product Attributes</h3>
      <div className="search">
        <Container>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success" type="submit" className="me-2">
              Search
            </Button>
            <Button
              onClick={handleAddProductAttributes}
              variant="outline-warning"
            >
              Add
            </Button>
          </Form>
        </Container>
      </div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Color</th>
              <th>Price</th>
              <th>Count</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataProvider.map((dt, i) => {
              return (
                <tr key={i}>
                  <td>{dt.id}</td>
                  <td>{dt.title}</td>
                  <td>
                    <img width={100} height={100} src={dt.image} alt="" />
                  </td>
                  <td>{dt.description}</td>
                  <td>{dt.color}</td>
                  <td>{dt.price}</td>
                  <td>{dt.count}</td>
                  <td>
                    <Button
                      onClick={() => handleUpdateProductAttributes(dt.id)}
                      variant="outline-warning"
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <OverlayTrigger
                      trigger="focus"
                      placement="auto"
                      overlay={popoverDelete(dt.id)}
                    >
                      <Button variant="outline-danger">Delete</Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
