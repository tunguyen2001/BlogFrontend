import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock
} from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
    const tabEditProfileId = "forgotPassword";
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: '',
        code: 0
    });

    const [formData, setFormData] = React.useState({
        userName: '',
        email: ''
    })

    const [formErrors, setFormErrors] = React.useState({
        userName: '',
        email: ''
    })

    const formValidate = () => {
        let errors = {};
        if (!formData.userName) {
            errors.userName = "userName is required"
        }
        if (!formData.email) {
            errors.email = "email is required"
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    let token = JSON.parse(localStorage.getItem("AccessToken"));
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formValidate()) {
            await axios.post('https://localhost:7171/api/Auth/ForgotPassword', formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {
                    setDataResponse(response.data);
                    if (response.data.success) {   //  success is response form server
                        alert("Success!! - Please check your email to get new password")
                    }
                }).catch((error) => {
                    console.log(error.response.data)
                });
        }
    };


    // handle change during enter input value
    const handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ ...formData, [name]: value });
        console.log(name, " : " , value);
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="d-flex justify-content-center mt-3">
                    <FontAwesomeIcon icon={faLock} style={{ fontSize: '70px' }} />
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <label > Trouble logging in? </label>
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <p className="text-secondary"> Enter correct UserName and Mail of you and we'll send you an password back into your account. </p>
                </div>

                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class=" col-form-label">UserName</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="userName" name="userName" value={formData.userName} onChange={(e) => handleOnChange(e)} placeholder="UserName" />
                    </div>
                    {formErrors.userName && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.userName}</div>)}
                </div>

                <div class="input-group d-flex align-items-center mt-3">
                    <div className="col-sm-4">
                        <label class=" col-form-label">Email</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={(e) => handleOnChange(e)} placeholder="Email" />
                    </div>
                    {formErrors.email && (<div class="invalid-feedback" style={{ display: "block" }}>{formErrors.email}</div>)}
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <button type="submit" id="btnSubmit" className="btn btn-primary w-25 p-2 my-3"> submit </button>
                </div>
            </form>
        </>
    )
}
