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
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import FormAdd from "./FormAdd";
import FormSort from "./FormSort";


export default function Home() {
  const [currentDateTime, setCurrentDateTime] = React.useState(() =>
    new Date().toLocaleString()
  );
  React.useEffect(() => {
    const secondsTimer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, [setCurrentDateTime]);

  const [isShowSort, setIsShowSort] = React.useState(false);
  const [isShowAdd, setIsShowAdd] = React.useState(false);

  const handleShowSort = () => {
    setIsShowSort(!isShowSort);
  }
  const handleShowAdd = () => {
    setIsShowAdd(!isShowAdd);
  }

  const [textColor, setTextColor] = React.useState('red');
  const handleChnageTextColor = (e) => {
    setTextColor(textColor === 'red' ? 'blue' : 'red');
}

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center p-2"
      >
        <div className="row shadow d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
          <div className="col-lg-8" >
            <div className="row border" style={{ height: "50px" }}>
              <div className="d-flex justify-content-between">
                <div className="p-2">{currentDateTime}</div>
                <div className="p-2">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Open Modal
                  </button>

                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                          <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border" style={{ height: "500px" }}>  <h1 style={{ color:textColor}} >HELLO WORLD</h1>  </div>
            <div className="row border" style={{ height: "50px" }}>
              <div className="d-flex p-1">
                <div className="m-1">
                  <button className="btn btn-secondary" onClick={handleShowSort} id="btn-form-sort">
                    FORM 1
                  </button>
                </div>
                <div className="m-1">
                  <button className="btn btn-secondary" onClick={handleShowAdd} id="btn-form-add">
                    FORM 2
                  </button>
                </div>
                <div className="m-1">
                  <button className="btn btn-secondary" onClick={handleChnageTextColor} id="button-addon2">
                    change Color
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4" >
            <div className="row border" style={{ height: "300px" }}>
              {isShowSort ? <FormSort/> : <></>}  
            </div>
            <div className="row border" style={{ height: "300px" }}>
            {isShowAdd ? <FormAdd/> : <></>}  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
