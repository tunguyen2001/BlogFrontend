import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faFlag,
  faThumbTack,
} from "@fortawesome/free-solid-svg-icons";

export default function MailInbox({
  mailInbox,
  handleDelete,
  handleShowDetail,
}) {

    // FlagColor
  const [flagColor, setFlagColor] = React.useState("red");
  const handleChnageTextColor = (e) => {
    setFlagColor(flagColor === "red" ? "blue" : "red");
  };

  // Pin Color , isPin
  // const [isPin, setIsPin] = React.useState(false);
  const [pinColor, setPinColor] = React.useState("#f0f0f0");
  const handleChangePin = () => {
    setPinColor(pinColor === "#f0f0f0" ? "blue" : "#f0f0f0");
    // setIsPin(true);
  }

  return (
    <>
      <div className="row">
        <div className="container-inbox ">
          <div className="row ">
            <div className="row">
              <div
                className="col-sm-9"
                onClick={() => handleShowDetail(mailInbox.id)}
              >
                {mailInbox.to}
              </div>
              <div
                className="col-sm-1"
                onClick={handleChnageTextColor}
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <FontAwesomeIcon
                  icon={faFlag}
                  style={{
                    width: "20px",
                    background: flagColor,
                    padding: "5px",
                  }}
                />
              </div>
              <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content" onClick={handleChnageTextColor}>
                    <div class="modal-header">
                      <div className="row p-2">
                        <div className="col-sm-9">
                          {" "}
                          <h4 class="modal-title">{mailInbox.to}</h4>{" "}
                        </div>
                        <div className="col-sm-1">
                          {" "}
                          <FontAwesomeIcon
                            icon={faFlag}
                            style={{
                              width: "20px",
                              background: '#f0f0f0',
                              padding: "5px",
                            }}
                          />{" "}
                        </div>
                        <div className="col-sm-1">
                          {" "}
                          <FontAwesomeIcon
                            icon={faThumbTack}
                            style={{
                              width: "20px",
                              background: '#f0f0f0',
                              padding: "5px",
                            }}
                          />{" "}
                        </div>
                        <div className="col-sm-1">
                          {" "}
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{
                              width: "20px",
                              background: '#f0f0f0',
                              padding: "5px",
                            }}
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="modal-body">
                      <p>{mailInbox.subject}</p>
                    </div>
                    <div class="modal-footer">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1" onClick={handleChangePin} >
                {" "} 
                <FontAwesomeIcon
                  icon={faThumbTack}
                  style={{
                    width: "20px",
                    background: pinColor,
                    padding: "5px",
                  }}
                />
              </div>
              <div
                className="col-sm-1"
                onClick={() => handleDelete(mailInbox.id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{
                    width: "20px",
                    background: '#f0f0f0',
                    padding: "5px",
                  }}
                />
              </div>
            </div>
            <div
              className="row-sm-12 "
              onClick={() => handleShowDetail(mailInbox.id)}
            >
              {" "}
              {mailInbox.subject}{" "}
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}
