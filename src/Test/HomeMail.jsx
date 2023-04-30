import React from "react";
import MailInbox from "./MailInbox";
import MailDetail from "./MailDetail"

function HomeMail() {
  const [mails, setMails] = React.useState(() => {
    const storageMails = JSON.parse(localStorage.getItem("Mails"));
    return storageMails ?? [];
  });

  // form data
  const [form, setForm] = React.useState({
    id: 0,
    to: "",
    subject: "",
    content: "",
    date: ""
  });

  // error
  const [errors, setErrors] = React.useState({
    to: "",
    subject: "",
    content: "",
  });

  // set Id
  let idd;
  if (mails.length === 0) {
    idd = 1;
  } else {
    idd = mails[mails.length - 1].id + 1;
  }

  // form validate
  const formValidate = () => {
    let errors = {};
    if (!form.to) {
      errors.to = "Email is required";
    } else if (
      !/^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@fsoft.com.vn$/.test(
        form.to
      )
    ) {
      errors.to = "Email is invalid is required @fsoft.com.vn";
    }
    if (!form.subject) {
      errors.subject = "Subject is required!";
    }
    if (!form.content) {
      errors.content = "Content is required!";
    }

    // @"^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@maverl.com$

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // reset Form data
  const resetFormData = () => {
    setForm({
      to: "",
      subject: "",
      content: "",
    });
  };

  // submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidate()) {
      setMails((prev) => {
        const newMail = [...prev, form];
        localStorage.setItem("Mails", JSON.stringify(newMail));
        return newMail;
      });
      resetFormData();
    }
  };

  // change value 
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    var now = new Date().toLocaleString()
    setForm({
      ...form,
      id: idd,
      date: now,
      [name]: value,
    });
  };

  // delete value 
  const handleDelete = (id) => {
    const result = mails.filter((value, i) => value.id !== id);
    setMails(result);
    localStorage.setItem("Mails", JSON.stringify(result));
    resetFormData();
    setShowDetail({});
  }

  const [showDetail, setShowDetail] = React.useState({})
  const handleShowDetail = (id) => {
    const result = mails.filter((value, i) => value.id === id)[0];
    setShowDetail(result);
  }

  return (
    <>
      <div className="container-fluid m-3">
        <div className="row">
          <div className="container-send-mail m-2">
            <form onSubmit={handleSubmit}>
              <div class="input-group ">
                <div className="col-sm-1">
                  <label class="col-sm-1 col-form-label">To</label>
                </div>
                <div className="container">
                  <input
                    type="text"
                    className="form-control"
                    id="to"
                    name="to"
                    value={form.to}
                    onChange={(e) => handleOnChange(e)}
                  />
                  {errors.to && (
                    <div class="invalid-feedback" style={{ display: "block" }}>
                      {" "}
                      {errors.to}{" "}
                    </div>
                  )}
                </div>
              </div>
              <div class="input-group mt-2">
                <div className="col-sm-1">
                  <label class="col-sm-1 col-form-label">Subject</label>
                </div>
                <div className="container">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => handleOnChange(e)}
                  />
                  {errors.subject && (
                    <div class="invalid-feedback" style={{ display: "block" }}>
                      {" "}
                      {errors.subject}{" "}
                    </div>
                  )}
                </div>
              </div>
              <div class="d-flex flex-column input-group mt-2">
                <div>
                  <label class="col-sm-1 col-form-label">Content</label>
                </div>
                <div className="container-fluid p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="content"
                    name="content"
                    value={form.content}
                    onChange={(e) => handleOnChange(e)}
                    style={{ height: "100px" }}
                  />
                  {errors.content && (
                    <div class="invalid-feedback" style={{ display: "block" }}>
                      {" "}
                      {errors.content}{" "}
                    </div>
                  )}
                </div>
              </div>
              <div className="input-group mt-2">
                <button
                  type="submit"
                  id="btnSudmit"
                  className="btn btn-primary"
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center row">
          <div className="col-lg-4 ">
            <h3>INBOX</h3>
            {mails.map((mailInbox, index) => (
              <MailInbox
                mailInbox={mailInbox}
                handleDelete={handleDelete}
                handleShowDetail={handleShowDetail}
              />
            ))}
          </div>
          <div className="col-lg-8">
            <MailDetail
              showDetail={showDetail}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMail;
