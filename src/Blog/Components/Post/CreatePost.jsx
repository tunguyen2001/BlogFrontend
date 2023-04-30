import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import danGuitar from '../../Images/DanGuitar.png';

export default function CreatePost() {
    const [posts, setPosts] = React.useState([]);
    const [fileSelected, setFileSelected] = React.useState();
    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });
    const [formData, setFormData] = React.useState({
        content: '',
        type: 'public',
        hagtag: ''
    });

    const [errors, setErrors] = React.useState({
        content: '',
        type: '',
        hagtag: ''
    })

    const formValidate = () => {
        let errors = {};
        if (!formData.content) {
            errors.content = "content is required"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    let token = JSON.parse(localStorage.getItem("AccessToken"));
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formDataRequest = new FormData();
        formDataRequest.append('content', formData.content);
        formDataRequest.append('formFile', fileSelected);
        formDataRequest.append('type', formData.type);
        formDataRequest.append('hagtag', formData.hagtag);
        console.log("formDataRequest",formDataRequest);
        console.log("formDataRequest",formData);

        if (formValidate()) {
            await axios.post('https://localhost:7171/api/Post', formDataRequest,
                {
                    headers: {
                        // 'Content-Type': 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {
                    setDataResponse(response.data);
                    if (response.data.success) {   //  success is response form server
                        alert("post Success!!!")
                    }
                }).catch((error) => {
                    console.log(error.response.data)
                });
        }
    };
    

    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({ 
            ...formData, 
            [name]: value });
    };

    const saveFileSelected = (e) => {
        setFileSelected(e.target.files[0]);
      };

    return (
        <>
            <div className="card shadow py-4 px-5" id="register-page">
                <form className="form" onSubmit={handleSubmit}>
                    {/* { dataResponse.success === true ? <></> :
                    <div class="alert alert-danger mt-3" role="alert">
                    {dataResponse.message}
                    </div> } */}
                    <div class=" d-flex align-items-center">
                        <div className="col-sm-2 d-flex justify-content-start" >
                            <img src={danGuitar} class="profileImageInFo" alt="Logo" />
                        </div>
                        <div className="col-sm-4">
                            <label class=" col-form-label" style={{ fontWeight: '600' }}>Tusnguyen</label>
                        </div>
                    </div>

                    <div className="input-group mt-3">
                        <textarea type="text" className="form-control" placeholder="Content ..." name="content" id="content"
                            value={formData.content} onChange={handleInputChange}
                            style={{ height: '200px' }}
                        />
                        {errors.content && <div className="invalid-feedback" style={{ display: "block" }}>{errors.content}</div>}
                    </div>
                    
                    <div className="input-group mt-3">
                        <input class="form-control" type="file" name="formFile" id="formFile" onChange={saveFileSelected}/>
                    </div>

                    <div class="input-group d-flex  align-items-center justify-content-end mt-3 ">
                        <div className="col-sm-2">
                            <label class=" col-form-label"> Privacy </label>
                        </div>
                        <div className="col-sm-4">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="type" onChange={handleInputChange}>
                                <option selected value="public"> Public </option>
                                <option  value="private"> Private </option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button type="submit" style={{ border: "none", background: "white" }}><FontAwesomeIcon icon={faPaperPlane} className="fs-5" style={{ color: "#0095F6" }} /></button>
                    </div>
                </form>
            </div>
        </>
    )
}