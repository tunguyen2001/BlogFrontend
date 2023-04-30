import React from "react";
import Header from "../Components/Layout/Header";
import EditInformation from "../Components/EditProfile/EditInformation";
import ChangePassword from "../Components/EditProfile/ChangePassword";
import ForgotPassword from "../Components/EditProfile/ForgotPassword";

export default function EditProfile() {
    const tabId = "editProfile";
    const [tabEditProfileId, setTabEditProfileId] = React.useState('editProfile')

    const [dataResponse, setDataResponse] = React.useState({
        success: true,
        message: '',
        data: ''
    });


    const handleSetSubTab = (e) => {
        setTabEditProfileId(e)
    }

    return (
        <>
            <Header tabId={tabId} />
            <div className="container d-flex justify-content-center border shadow w-75 mt-3 p-3">
                <div className="col-lg-3 m-3">
                    <ul class="list-group list-group-flush">
                        <li class={tabEditProfileId === 'editProfile' ? 'list-group-item text-primary' : 'list-group-item' } 
                            onClick={() => handleSetSubTab("editProfile")} > Edit information </li>
                        <li class={tabEditProfileId === 'changePassword' ? 'list-group-item text-primary' : 'list-group-item' }
                            onClick={() => handleSetSubTab("changePassword")} >Change password</li>
                        <li class={tabEditProfileId === 'forgotPassword' ? 'list-group-item text-primary' : 'list-group-item' }
                            onClick={() => handleSetSubTab("forgotPassword")} >Forgot password</li>
                        <li class="list-group-item">Notifications</li>
                    </ul>
                </div>

                { tabEditProfileId === 'editProfile' ? <div className="col-lg-6 m-3">
                    <EditInformation/>
                    </div> : <></> }

                { tabEditProfileId === 'changePassword' ? <div className="col-lg-6 m-3">
                    <ChangePassword/>
                    </div> : <></> }
                
                { tabEditProfileId === 'forgotPassword' ? <div className="col-lg-6 m-3">
                    <ForgotPassword/>
                    </div> : <></> }

            </div>
        </>
    );
}
