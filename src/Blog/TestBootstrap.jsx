import React from "react";
import {
  Table,
  Form,
  Button,
  Container,
  Card,
  ListGroup,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";

export default function TestBootstrap() {
  const [formData, setFormData] = React.useState({
    email: "",
    gender: "",
    subscribe: false,
  });
  const [formErrors, setFormErrors] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const [formRadio, setFormRadio] = React.useState;
  const handleRadio = (e) => {
    console.log();
  };

  return (
    <>
      <Container>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container className="m-5">
        <div>
          <label>
            {" "}
            Gender:
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            {formErrors.gender && <span>{formErrors.gender}</span>}
          </label>
        </div>
      </Container>

      <Container className="d-flex justify-content-center mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group>
            <Form.Check
              value="male"
              type="radio"
              aria-label="radio 1"
              label="male"
              onChange={handleChange}
              checked={formData.gender === "male"}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <Container className="m-5">
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Others/placeholder1.webp"
              alt="Generic placeholder image"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            This is some content from a media component. You can replace this
            with any content and adjust it as needed.
          </div>
        </div>
      </Container>

      <Container className="m-5">
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </Container>

      <Container className="m-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://mdbcdn.b-cdn.net/img/Photos/Others/placeholder1.webp"
            alt="Generic placeholder image"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>

      <Container className="m-5">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container className="m-5">
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Container>

      <Container className="d-flex  m-5"></Container>

      <Container className="m-5">
        <div className="d-flex justify-content-start">...</div>
        <div className="d-flex justify-content-end">...</div>
        <div className="d-flex justify-content-center">...</div>
        <div className="d-flex justify-content-between">...</div>
        <div className="d-flex justify-content-around">...</div>
        <div className="d-flex justify-content-evenly">...</div>
      </Container>

      <Container className="m-5">
        <Row className="border rounded-3">
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}
