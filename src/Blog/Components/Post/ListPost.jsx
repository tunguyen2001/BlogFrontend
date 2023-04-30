import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaperPlane,
    faHeart,
    faEllipsis,
    faComment,
    faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import danGuitar from "../../Images/DanGuitar.png";
import pts2048 from "../../Images/pts2048.png";

export default function ListPost({postItem}) {
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        setPost(postItem);
    }, []);

    return (
        <>
            {/* <section className="list-post"> */}
            <section>
                {/*  post item  */}
                {<div class="card card-item mb-3">
                        <div class="card-header">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <img src={post.imageSrc} class="profileImage" alt="avt" />
                                    <h6 class="mb-0 ms-2">Tuss</h6>
                                </div>
                                <div>
                                    <i class="fa-solid fa-ellipsis">
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <img src={post.imageSrc} class="mw-100" alt="profileImgSm" />
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <i class="fa-solid fa-heart fs-3">
                                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                                    </i>
                                    <i class="fa-solid fa-comment fs-3 mx-3">
                                        <FontAwesomeIcon icon={faComment} />
                                    </i>
                                    <i class="fa-solid fa-paper-plane fs-3">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bookmark fs-3" style={{ color: "#0095F6" }}>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </i>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <img src={danGuitar} class="profileImgSm" alt="profileImgSm" />
                                <span class="ms-2"> {post.content} </span>
                            </div>
                            <div>
                                <div>Comment 1 🙏🙏🙏🥺🥺🥺🥰🥰🥰😍😍😍</div>
                                <div class="text-secondary"> Total 8,190 comments</div>
                                <div>mightymykell 🙏</div>
                                <div>blvckd0pe 😍😍😍</div>
                            </div>
                            <div>
                                <small class="text-secondary"> 08/04/2023 : 12:00:00 </small>
                            </div>
                            <div class="d-flex mt-2">
                                <input type="text" class="form-control" placeholder="Comment..."/>
                                <button class="btn btn-default">Send</button>
                            </div>
                        </div>
                    </div>}
            </section>
        </>
    );
}
