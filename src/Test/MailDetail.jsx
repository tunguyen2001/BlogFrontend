import React from "react";

export default function MailDetail(showDetail) {
    // datail mail
   let detail = showDetail.showDetail ;
  return (
    <>
      <div className="row">
        {" "}
        <h3>MAIL DETAIL</h3>
        <div className=" container-mail-detail border p-3 mr-4">
          <div className="row">
            {" "}
            <h5> {detail.subject} </h5>{" "}
          </div>
          <div className="row">
            {" "}
            <p> {detail.date} </p>{" "}
          </div>
          <div className="row">
            {" "}
            <p> { detail.to=== undefined ? '' : `Form: ${detail.to }` } </p>{" "}
          </div>
          <div className="row">
            {" "}
            <p> {detail.subject} </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
