import React from "react";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../assets/icons";

export default function Topbar() {
  return (
    <div className="bg-black text-white xl:my-1 flex items-center justify-between w-full pl-3">
      <div>
        <span className="font-bold">TRENDING : </span>
      </div>

      <div className="hidden xl:flex w-[20%] justify-evenly bg-green-200 py-1">
        <a href="">
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a href="">
          <img
            src={instagramIcon}
            alt="instagram icon"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a href="">
          <img
            src={twitterIcon}
            alt="twitter icon"
            className="w-[20px] h-[20px]"
          />
        </a>
        <a href="">
          <img
            src={youtubeIcon}
            alt="youtube icon"
            className="w-[20px] h-[20px]"
          />
        </a>
      </div>
    </div>
  );
}
