import React from "react";

export default function FormSort() {
  const data = [
    {
      id: 1,
      firstName: "Learaham1",
      lastName: "Bret",
    },
    {
      id: 2,
      firstName: "Mark2",
      lastName: "BBBB",
    },
    {
      id: 3,
      firstName: "LeanGraham3",
      lastName: "Bret",
    },
    {
      id: 4,
      firstName: "Mark4",
      lastName: "BBBB",
    },
    
  ];

  return (
    <>
      <div className="row align-items-start p-2">
        <div class="input-group">
          <input type="text" className="form-control" id="phone" name="phone" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <table class="table">
          {/* <thead></thead> */}
          <tbody>
            {data.map((user, index) => (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.firstName}</td>
                <td>{user.firstName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
