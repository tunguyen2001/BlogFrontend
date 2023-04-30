import React from "react";
import axios from "axios";
import "../Styles/Style.css";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [dataResponse, setDataResponse] = React.useState({
    success: true,
    message: '',
    data: ''
  });
  const [formData, setFormData] = React.useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [errors, setErrors] = React.useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value ;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const formValidate = () => {
    let errors = {};
    if (!formData.userName) {
      errors.userName = "UserName is required";
    } else if(formData.userName.length > 30 || formData.userName.length < 3) {
      errors.userName = "UserName range only 3-30 character";
    }

    if (!formData.fullName) {
      errors.fullName = "FullName is required";
    } else if(formData.fullName.length > 50) {
      errors.fullName = "UserName max length 50 character";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
      .test(formData.email)){
      errors.email = 'Email invalid: after "." must be 2-4 character!'
    }
    
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/
      .test(formData.password)){
      errors.password = 'Password Must be (A-Z a-z 0-9 #?!@$%^&*-) 8-12 character'
    }
    
    if ((!formData.rePassword) || (formData.rePassword !== formData.password)) {
      errors.rePassword = "RePassword must match the password ";
    } 
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidate()) {
      await axios.post('https://localhost:7171/api/Auth/Register', formData)
          .then((response) => {
          setDataResponse(response.data);
          if(response.data.success){   //  success is response form server
            alert("Register Success!!!")
            navigate('/');    
          }   
      });
    }
  };

  return (
    <div className="container">
        <div className="center shadow p-5" id="register-page">
            <div className="title text-capitalize">
                <h3>register</h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                { dataResponse.success === true ? <></> :
                <div class="alert alert-danger mt-3" role="alert">
                    {dataResponse.message}
                </div> }
                <div className="form-group mt-3">
                    <input type="text" className="form-control" placeholder="User name" name="userName" id="userName"
                        //required minLength="3" maxLength="30" id="userName"
                        value={formData.userName} onChange={handleInputChange}
                    />
                    {errors.userName && <div className="invalid-feedback" style={{ display: "block" }}>{errors.userName}</div>}
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" placeholder="Full name" name="fullName" id="fullName"
                        //required minLength="3" maxLength="30" id="fullName"
                        value={formData.fullName} onChange={handleInputChange}
                    />
                    {errors.fullName && <div className="invalid-feedback" style={{ display: "block" }}>{errors.fullName}</div>}
                </div>
                <div className="form-group mt-3">
                    <input type="email" className="form-control" placeholder="E-mail" id="email" name="email"
                        //required minLength="5"
                        value={formData.email} onChange={handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback" style={{ display: "block" }}>{errors.email}</div>}
                </div>
                <div className="form-group mt-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                        //minLength="8" maxLength="30" required
                        value={formData.password} onChange={handleInputChange}
                    />
                    {errors.password && <div className="invalid-feedback" style={{ display: "block" }}>{errors.password}</div>}
                </div>
                <div className="form-group mt-3">
                    <input type="password" className="form-control" id="rePassword" placeholder="Re Password" name="rePassword"
                        //minLength="8" maxLength="30" required
                        value={formData.rePassword} onChange={handleInputChange}
                    />
                    {errors.rePassword && <div className="invalid-feedback" style={{ display: "block" }}>{errors.rePassword}</div>}
                </div>
                <button type="submit" id="btnRegister" className="btn btn-success text-capitalize w-100 p-2 mt-4 mb-3">register</button>
                <a href="/">Click here to Login</a>
            </form>
        </div>
    </div>
    
  );
}
