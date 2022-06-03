import React from "react";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../assets/icons";

export default function SocialWidget() {
  return (
    <div className="bg-white border pl-5">
      <div className="my-5">
        <a href="">
          <img
            src={facebookIcon}
            alt="Facebook icon"
            className="w-[30px] h-[30px]"
          />
        </a>
      </div>
      <div className="my-5">
        <a href="">
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className="w-[30px] h-[30px]"
          />
        </a>
      </div>
      <div className="my-5">
        <a href="">
          <img
            src={twitterIcon}
            alt="Twitter Icon"
            className="w-[30px] h-[30px]"
          />
        </a>
      </div>
      <div className="my-5">
        <a href="">
          <img
            src={youtubeIcon}
            alt="Youtube Icon"
            className="w-[30px] h-[30px]"
          />
        </a>
      </div>
    </div>
  );
}
