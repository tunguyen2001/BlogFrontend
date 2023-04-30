import React from "react";
import "../../Styles/Style.css";
import danGuitar from "../../Images/DanGuitar.png";

export default function Footer() {
  return (
    <>
      <div>
        <div class="d-flex align-items-center justify-content-between mb-5">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <img src={danGuitar} class="profileImage" alt="profileImgSm" />
            </div>
            <div>
              <div> Thanh Tuss</div>
              <div>
                <small class="text-secondary">Animal Kingdom</small>
              </div>
            </div>
          </div>
          <div class="text-primary">Switch</div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="fw-bold">Suggestions For You</div>
          <div>See All</div>
        </div>
        <div class="d-flex align-items-center justify-content-between my-2">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <img src={danGuitar} class="profileImgSm" alt="profileImgSm" />
            </div>
            <div>
              <div>giftyloves3</div>
              <div>
                <small class="text-secondary">New to Instagram</small>
              </div>
            </div>
          </div>
          <div class="text-primary">Follow</div>
        </div>
        <div class="d-flex align-items-center justify-content-between my-2">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <img src={danGuitar} class="profileImgSm" alt="profileImgSm" />
            </div>
            <div>
              <div>kendalljenner</div>
              <div>
                <small class="text-secondary">Popular</small>
              </div>
            </div>
          </div>
          <div class="text-primary">Follow</div>
        </div>
        <div class="d-flex align-items-center justify-content-between my-2">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <img src={danGuitar} class="profileImgSm" alt="profileImgSm" />
            </div>
            <div>
              <div>kendalljenner</div>
              <div>
                <small class="text-secondary">
                  Followed by emily_pappas_ + 1 m
                </small>
              </div>
            </div>
          </div>
          <div class="text-primary">Follow</div>
        </div>
        <div class="d-flex align-items-center justify-content-between my-2">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <img src={danGuitar} class="profileImgSm" alt="profileImgSm" />
            </div>
            <div>
              <div>tammyhembrow</div>
              <div>
                <small class="text-secondary">Popular</small>
              </div>
            </div>
          </div>
          <div class="text-primary">Follow</div>
        </div>

        <div class="mt-4">
          <div class="row text-secondary justify-content-start">
            <div class="col-sm">About</div>
            <div class="col-sm">Help</div>
            <div class="col-sm">Press</div>
            <div class="col-sm">API</div>
            <div class="col-sm">Jobs</div>
            <div class="col-sm">Privacy</div>
            <div class="col-sm">Terms</div>
            <div class="col-sm">Locations</div>
            <div class="col-sm text-nowrap">Top Accounts</div>
            <div class="col-sm">Hashtags</div>
            <div class="col-sm">Language</div>
          </div>
          <div class="text-secondary mt-3">© 2023 Blog Technology</div>
        </div>
      </div>
    </>
  );
}
