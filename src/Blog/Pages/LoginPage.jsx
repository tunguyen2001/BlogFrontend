import React from "react"
import axios from 'axios';
import "../Styles/Style.css";
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate();
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });

    const [formData, setFormData] = React.useState({
        userName: '',
        password: ''
    })

    const [formErrors, setFormErrors] = React.useState({
        userName: '',
        password: ''
    })

    // handle submit and request value
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formValidate()){
            await axios.post('https://localhost:7171/api/Auth/Login', formData)
                .then((response) => {
                setDataResponse(response.data);
                if(response.data.success){   // success is response from server
                    localStorage.setItem("AccessToken", JSON.stringify(response.data.data));
                    navigate('/home');    
                }  
            });
            
        }
    }

    // handle change during enter input value
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ ...formData, [name] : value });
    }
    
    // set error form validate // return true or false
    const formValidate = () => {
        let errors = {};
        if(!formData.userName){
            errors.userName = "UserName is required"
        } else if(formData.userName.length > 30 || formData.userName.length < 3) {
            errors.userName = "UserName range only 3-30 character";
        }

        if(!formData.password){
            errors.password = 'Password is required'
        } else 
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/
            .test(formData.password)){
            errors.password = 'Password Must be (A-Z a-z 0-9 #?!@$%^&*-) 8-12 character'
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

return(
    <>
    <div className="container">
        <div className="center shadow p-5">
            <div className="title">
                <h3>Please Sign In</h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                { dataResponse.success === true ? <></> :
                <div class="alert alert-danger mt-3" role="alert">
                    {dataResponse.message}
                </div> }
                <div className="form-group mt-3">
                    <input type="text" className="form-control" onChange={handleChange} id="validationUserName" name="userName" placeholder="UserName" />
                    {formErrors.userName && <div className="invalid-feedback" style={{display: "block"}}>{formErrors.userName}</div>}
                </div>
                <div className="form-group mt-3">
                    <input type="password" className="form-control m-t-10" onChange={handleChange} id="validationPass" name="password" placeholder="Password" />
                    {formErrors.password && <div className="invalid-feedback" style={{ display: "block" }}>{formErrors.password}</div>}
                </div>
                <div className="form-check mt-3">
                    <input type="checkbox" className="form-check-input m-t-10" id="validationCheck"/>
                    <label className="form-check-label text-capitalize" htmlFor="validationCheck">remember
                        me</label>
                </div>
                <button type="submit" id="btnLogin" className="btn btn-success w-100 p-2 mt-4 mb-3">Login</button>

                <a href="/register">Click here to Register</a>

            </form>
        </div>
    </div>
    </>
)
}

export default LoginPage
