import React from "react";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../assets/icons";

export default function FooterSocial() {
  return (
    <>
      <li className="list-none">
        <a href="">
          <img
            className="w-[30px] h-[30px]"
            src={facebookIcon}
            alt="Facebook Icon"
          />
        </a>
      </li>
      <li className="list-none">
        <a href="">
          <img
            className="w-[30px] h-[30px]"
            src={instagramIcon}
            alt="Instagram Icon"
          />
        </a>
      </li>
      <li className="list-none">
        <a href="">
          <img
            className="w-[30px] h-[30px]"
            src={twitterIcon}
            alt="Twitter Icon"
          />
        </a>
      </li>
      <li className="list-none">
        <a href="">
          <img
            className="w-[30px] h-[30px]"
            src={youtubeIcon}
            alt="Youtube Icon"
          />
        </a>
      </li>
    </>
  );
}
