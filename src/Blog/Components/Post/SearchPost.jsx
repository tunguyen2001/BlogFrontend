import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";

export default function SearchPost(){
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });
    const [formData, setFormData] = React.useState({
        search: '',
    });

    const [errors, setErrors] = React.useState({
        search: '',
    })

    const formValidate = () => {
        let errors = {};
        if (!formData.search) {
            errors.search = "Please enter keyword to search..."
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ ...formData, [name]: value });
    }

    return(
        <>
            <div className="" id="register-page"  >
                <form className="form d-flex justify-content-center" onSubmit={handleSubmit}>
                    {/* { dataResponse.success === true ? <></> :
                    <div class="alert alert-danger mt-3" role="alert">
                    {dataResponse.message}
                    </div> } */}
                    
                    <div className="d-flex justify-content-center align-items-center input-group " style={{maxWidth:'500px'}} >
                        <input type="text" className="form-control" placeholder="Search ..." name="search" id="search"
                            value={formData.search} onChange={handleInputChange}
                            style={{borderRadius:'5px'}}
                        />
                        <div className=" px-2"> 
                            <button type="submit" style={{border:"none", background:"white"}}><FontAwesomeIcon icon={faSearch} className="fs-5 text-secondary" /></button>  
                        </div> 
                        {errors.search && <div className="invalid-feedback" style={{ display: "block" }}>{errors.search}</div>}
                    </div>
                    
                    {/* <div className="d-flex justify-content-end mt-3"> 
                        <button type="submit" style={{border:"none", background:"white"}}><FontAwesomeIcon icon={faSearch} className="fs-5" style={{color:"#0095F6"}}/></button>  
                    </div>  */}
                </form>
            </div>
            
        </>
    )
}