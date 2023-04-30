import React from "react";
import danGuitar from "../../Images/DanGuitar.png";

export default function ListPost() {
    return (
        <>

            {/* Stories */}
            {/* <section class="card-body m-3"> */}
            <section>
                <div class="d-flex justify-content-start">
                    <div class="d-flex align-items-center flex-column">
                        <img
                            src={danGuitar}
                            class="profileImageList mb-2"
                            alt="profileImgSm"
                        />
                        <h6 class="mb-0 ms-2"> Tusgnss </h6>
                    </div>
                    <div class="d-flex align-items-center flex-column mx-3">
                        <img
                            src={danGuitar}
                            class="profileImageList mb-2"
                            alt="profileImgSm"
                        />
                        <h6 class="mb-0 ms-2"> therock </h6>
                    </div>
                    <div class="d-flex align-items-center flex-column">
                        <img
                            src={danGuitar}
                            class="profileImageList mb-2"
                            alt="profileImgSm"
                        />
                        <h6 class="mb-0 ms-2"> Tomhall </h6>
                    </div>
                    <div class="d-flex align-items-center flex-column mx-3">
                        <img
                            src={danGuitar}
                            class="profileImageList mb-2"
                            alt="profileImgSm"
                        />
                        <h6 class="mb-0 ms-2"> therock </h6>
                    </div>
                    <div class="d-flex align-items-center flex-column">
                        <img
                            src={danGuitar}
                            class="profileImageList mb-2"
                            alt="profileImgSm"
                        />
                        <h6 class="mb-0 ms-2"> Tomhall </h6>
                    </div>
                    <div class="d-flex align-items-center flex-column mx-3">
                        <img
                            src={danGuitar}
                            class="profileImageList mb-2"
                            alt="profileImgSm"
                        />
                        <h6 class="mb-0 ms-2"> therock </h6>
                    </div>
                    
                </div>
            </section>

        </>
    );
}
