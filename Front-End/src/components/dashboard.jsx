import React, { Component } from 'react';
import {Container,Row, Col, Button, Form, FormGroup, Label, Input, FormText,Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import "./css/dashboard.css";

class Dashboard extends Component {

    render() {
        return (
          <Container className="themed-container">
            <Row>
            <div className="image_profile">
              <Col sm="6" md="4">
                <Row>
              <img classname="profileimg" src="https://randomuser.me/api/portraits/lego/2.jpg"></img>
              </Row>
              <Row>
              <Button id="uploadimage" color="primary">Upload</Button>
              </Row>
              </Col>
            </div>
            <Col sm="6" md="8">
            <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Name</Label>
              <Col sm={10}>
              <Input
                type="exampletext"
                placeholder="Your Name"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Job</Label>
              <Col sm={10}>
              <Input
                type="exampletext"
                placeholder="Current Job"
              />
              </Col>
            </FormGroup>
        
            <FormGroup row>
              <Label for="exampleText" sm={2}>About Yourself</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Skills</Label>
              <Col sm={10}>
              <Input
                type="exampletext"
                placeholder="Skills"
              />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Education</Label>
              <Col sm={10}>
              <Input
                type="exampletext"
                placeholder="Education"
              />
              </Col>
            </FormGroup>

          </Form>
          </Col>
          </Row>
          
          <Container id="subcont">
      <Row>
        <h1 id="subheader">Projects</h1>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Project-Image" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardText>Write a short note about your awesome projects</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Project-Image" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardText>Write a short note about your awesome projects</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Project-Image" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardText>Write a short note about your awesome projects</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Project-Image" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardText>Write a short note about your awesome projects</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
      </Row>

      <Row>
        <h1 id="subheader">Internships</h1>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image" />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image" />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image" />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image" />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
      </Row>

      <Row>
        <h1 id="subheader">Templates</h1>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Demo" />
        <CardBody>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Demo" />
        <CardBody>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Demo" />
        <CardBody>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Demo" />
        <CardBody>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
      </Row>
          </Container>

          </Container>
        );
    }
}

export default Dashboard;
