import React from "react";
import danGuitar from '../../Images/DanGuitar.png'

export default function EditInformation() {
    const tabEditProfileId = "editInformation";
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });

    const [formData, setFormData] = React.useState({
        fullName: '',
        birthday: '',
        address: '',
        sex: '',
        phone: '',
        privacy: '',
    })

    const [formErrors, setFormErrors] = React.useState({
        fullName: '',
        birthday: '',
        address: '',
        sex: '',
        phone: '',
        privacy: '',
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
                        <label class=" col-form-label">Tusnguyen</label>
                    </div>
                </div>
                <div class="input-group d-flex  align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class=" col-form-label">Full Name</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.fullName && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.fullName}</div>)}
                </div>
                <div class="input-group d-flex  align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class=" col-form-label">Birthday</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="birthday" name="birthday" value={formData.birthday} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.birthday && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.birthday}</div>)}
                </div>
                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class="col-form-label">Address</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.address && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.address}</div>)}
                </div>
                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class="col-form-label">Sex</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="sex" name="sex" value={formData.sex} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.sex && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.sex}</div>)}
                </div>
                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class="col-form-label">Phone</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.phone && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.phone}</div>)}
                </div>
                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class="col-form-label">Privacy</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="privacy" name="privacy" value={formData.privacy} onChange={(e) => handleOnChange(e)} />
                    </div>
                    {formErrors.privacy && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.privacy}</div>)}
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" id="btnSubmit" className="btn btn-primary  w-25 p-2 my-3"> submit </button>
                </div>
            </form>
        </>
    )
}
