import React, { Component } from 'react';
import {Container,Row, Col, Button, Form, FormGroup, Label, Input,Card, CardBody, CardTitle, CardText} from 'reactstrap';
import "./css/dashboard.css";
import Select from 'react-select';
import FormField from './formfield';
import {Route, Link} from 'react-router-dom';


const options = [
  { value: "C++",   label: "C++" },
  { value: "C",   label: "C"},
  { value: "C#",   label: "C#"},
  { value: "Java",   label: "Java"},
  { value: "Python",   label: "Python"},
  { value: "Javascript",   label: "Javascript"},
  { value: "Web Development",   label: "Web Development"},
  { value: "R",   label: "R"}
];

const formatOptionLabel = ({ value, label, customAbbreviation }) => (
  <div style={{ display: "flex" }}>
    <div>{label}</div>
    <div style={{ marginLeft: "10px", color: "#ccc" }}>
      {customAbbreviation}
    </div>
  </div>
);


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { inputs: ['input-0'] };
  }

  appendInput() {
    var newInput = `form-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
}

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
              <Select isMulti placeholder="Add" formatOptionLabel={formatOptionLabel} options={options}/>
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
      <div>
               {/* <Form>
                   <div id="dynamicInput">
                       {this.state.inputs.map(input => <Input key={input} />)}
                   </div>
               </Form>
               <button onClick={ () => this.appendInput() }>
                   CLICK ME TO ADD AN INPUT
               </button> */}
               <Route component={FormField} />
            </div>
      <Row>
        <h1 id="subheader">Internships</h1>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>   <Card>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
          <CardText>
            <small className="text-muted">Click to know more!!</small>
          </CardText>
        </CardBody>
      </Card></Col>
        <Col>   <Card>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Write a short note about your internship</CardText>
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
