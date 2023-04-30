import React from "react";
import danGuitar from '../../Images/DanGuitar.png'

export default function ChangePassword() {
    const tabEditProfileId = "changePassword";
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });

    const [formData, setFormData] = React.useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const [formErrors, setFormErrors] = React.useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    // handle change during enter input value
    const handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ ...formData, [name]: value });
        console.log(name, " : " , value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="input-group d-flex align-items-center">
                    <div className="col-sm-4 d-flex justify-content-center" >
                        <img src={danGuitar} class="profileImageInFo" alt="Logo" />
                    </div>
                    <div className="col-sm-8">
                        <label class=" col-form-label">TusNguyen</label>
                    </div>
                    {formErrors.newPassword && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.newPassword}</div>)}
                </div>
                <div class="input-group d-flex  align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class=" col-form-label">Old password</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="oldPassword" name="oldPassword" value={formData.oldPassword} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.oldPassword && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.oldPassword}</div>)}
                </div>
                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class="col-form-label">New password</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="newPassword" name="newPassword" value={formData.newPassword} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.newPassword && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.newPassword}</div>)}
                </div>
                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class="col-form-label">Confirm new password</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="confirmNewPassword" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.confirmNewPassword && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.confirmNewPassword}</div>)}
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" id="btnSubmit" className="btn btn-primary  w-25 p-2 my-3"> submit </button>
                </div>
                <div class="d-flex justify-content-center">
                    <span class="text-primary" style={{ fontWeight: '600' }}> Privacy policy </span>
                </div>
            </form>
        </>
    )


}