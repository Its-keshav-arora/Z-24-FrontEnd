import React from "react";

export default function Socials(props) {
  return (
    <>
      <div className="pr-40 pt-12 flex-col socials">
        <h1 className="pb-6 relative text-xl left-8 socialHeading">{props.text}</h1>
        <div className="flex">
        <a className="pr-8" href=""><img className="" src="../images/icons/instagram.svg" alt="" /></a>
        <a className="pr-8" href=""><img className="" src="../images/icons/facebook.svg" alt="" /></a>
        <a className="pr-8" href=""><img className="" src="../images/icons/linkedin.svg" alt="" /></a>
        <a className="pr-8" href=""><img className="" src="../images/icons/twitter.svg" alt="" /></a>
        <a className="pr-8" href=""><img className="" src="../images/icons/youtube.svg" alt="" /></a>
        </div>
      </div>

    </>
  );
}
