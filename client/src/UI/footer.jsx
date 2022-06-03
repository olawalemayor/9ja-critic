import React from "react";
import { FooterLinks, FooterSocial } from "../components";

export default function Footer() {
  return (
    <div className="py-8">
      <div className="mx-auto flex justify-evenly w-[300px] my-6">
        <FooterSocial />
      </div>

      <div className="xl:w-[500px] xl:mx-auto my-6">
        <FooterLinks />
      </div>

      <div className="text-green-800 font-bold text-5xl text-center my-6">
        9JA<span className="text-black">CRI</span>TIC
      </div>

      <div className="text-center">&copy; 2022. All right reserved.</div>
    </div>
  );
}
