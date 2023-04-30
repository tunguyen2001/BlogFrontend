import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faPaperPlane,
    faPlus,
    faCompass,
    faHeart,
    faSearch,
    faSignOut
} from "@fortawesome/free-solid-svg-icons";
import danGuitar from "../../Images/DanGuitar.png";
import { loggedIn } from "../Auth/Auth";

function Header({ tabId }) {
    const navigate = useNavigate();
    const handleSetTab = (tab) => {
        navigate(`/${tab}`)
    }

    const handleLogout = () => {
        localStorage.removeItem("AccessToken");
        navigate('/');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg m-2 border-bottom">
                <div className="d-flex align-items-center justify-content-around w-100">
                    <a className="navbar-brand"  onClick={ () => handleSetTab("home")} >
                        <h4> TechBlog </h4>
                    </a>
                    {/* <div className="mx-4">
                        <form action="" className="d-flex ">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                            />
                        </form>
                    </div> */}
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fs-5 me-3 " id="home" onClick={() => handleSetTab("home")}>
                            <FontAwesomeIcon icon={faHouse} className={tabId ==='home' ? 'text-primary' : "text-secondary"} />
                        </i>
                        <i className="fa-solid fs-5 me-3" id="searchPage" onClick={() => handleSetTab("searchPage")}>  
                            <FontAwesomeIcon icon={faSearch} className={tabId ==='searchPage' ? 'text-primary' : "text-secondary"}/>
                        </i>
                        {/* <span className="px-1 py-0 border border-secondary fs-5 me-3"> */}
                        <i className="fa-solid fs-5 me-3" id="createPost" onClick={() => handleSetTab("createPost")}>
                            <FontAwesomeIcon icon={faPlus} className={tabId ==='createPost' ? 'text-primary' : "text-secondary"} />
                        </i>
                        {/* </span> */}
                        <i className="fa-solid fs-5 me-3">
                            <FontAwesomeIcon icon={faCompass} className="text-secondary"/>
                        </i>
                        <i className="fa-solid fs-5">
                            <FontAwesomeIcon icon={faHeart} className="text-secondary"/>
                        </i>

                        { loggedIn ? 
                        <>
                            <i> <p> Hello User </p> </i>
                            <i className="fa-solid fs-5" onClick={() => handleLogout()}>
                                <FontAwesomeIcon icon={faSignOut} className="text-secondary"/>
                            </i>
                        </> : <></> }


                        <div className="ms-3" onClick={()=>{ navigate("/profile") }}>
                            <img src={danGuitar} class="profileImage" alt="Logo" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;