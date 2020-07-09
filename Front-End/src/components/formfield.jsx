import React, { useState } from "react";
import {Row,Button,Col,Form} from "reactstrap";
 
function App() {
  const [inputList, setInputList] = useState([{ projectName: "", projectLink: "" , projectDes:""}]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { projectName: "", projectLink: "", projectDes:"" }]);
  };
 
  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <Form>
          <div className="box">
            <Row>
              
            <Col md="3">
            <input
              name="projectName"
              placeholder="Enter Project Name"
              value={x.projectName}
              onChange={e => handleInputChange(e, i)}
            /></Col>
            <Col md='9'>
            <input
              className="ml10"
              name="projectLink"
              placeholder="Enter Project Link"
              value={x.projectLink}
              onChange={e => handleInputChange(e, i)}
            />
            </Col>
            </Row>
            <Row>
            <input
              name="projectDes"
              placeholder="Enter Project Description"
              type="textarea"
              id="exampleText"
              value={x.projectDes}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <Button color="danger" size="lg"
                className="mr10"
                onClick={() => handleRemoveClick(i)}>-</Button>}<span> </span>
              {inputList.length - 1 === i && <Button color="success" size="lg" onClick={handleAddClick}>+</Button>}
            </div>
            
            </Row>
          </div>
          </Form>
        );
      })}
    </div>
    
  );
}
 
export default App;