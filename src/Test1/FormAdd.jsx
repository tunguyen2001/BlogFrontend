import React from "react";

export default function FormAdd() {
  return (
    <>
      <div className="row"></div>
      <div className="row align-items-end p-2">
        <div class="input-group">
          <input type="text" className="form-control" id="phone" name="phone" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
