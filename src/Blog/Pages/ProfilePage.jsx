import React from "react";
import Header from "../Components/Layout/Header";   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCog
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './profile.css'
import DanGuitar from '../Images/DanGuitar.png'

export default function ProfilePage() {
    const tabId = 'profile';
    const navigate = useNavigate();
    const handleNavigateEdit = () => {
        navigate('/editProfile')
    }

    return (
        <>
        <Header tabId={tabId}/>
            <div className="container border-bottom m-3 pb-3">
                <div className="container-fluid d-flex  align-items-center justify-content-around w-75"  >
                    <div className="col-lg-1 ">
                        <img src={DanGuitar} alt="" style={{ width: "120px" }} className="rounded-circle"/>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 >TTuss</h2>
                            <button onClick={()=>handleNavigateEdit()} className="btn btn-light border" style={{fontWeight: '600'}}> Edit profile </button>
                            <i class="fa-solid fa-lg">
                                    <FontAwesomeIcon icon={faCog} />
                            </i>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                                <p><span style={{fontWeight: '600'}}>164</span> posts</p>
                                <p><span style={{fontWeight: '600'}}>188</span> followers</p>
                                <p><span style={{fontWeight: '600'}}>206</span> following</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p> <span style={{fontWeight: '600'}}> ThanhTUss </span>  
                            From my point of view, I welcome happen anything and I like it!</p>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div class="container mt-5">
                    <div class="gallery">
                        <div class="gallery-item" tabindex="0">
                            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt="" />
                            <div class="gallery-item-info">
                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>
                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 47</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>

                            </div>

                        </div>

                        <div class="gallery-item" tabindex="0">

                            <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" class="gallery-image" alt="" />

                            <div class="gallery-item-type">

                                <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

                            </div>

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>

                            </div>

                        </div>

                    </div>
                    {/* <!-- End of gallery --> */}

                    <div class="loader"></div>

                </div>
                {/* <!-- End of container --> */}

            </main>
        </>
    )
}