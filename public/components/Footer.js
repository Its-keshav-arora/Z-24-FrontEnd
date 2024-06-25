import React from "react";
import FooterButtons from "./footerButtons";
import Socials from "./Socials";
import Details from "./Details";

export default function Footer() {
  return (
    <>
      <img className="hexagonImage" src="../images/Union.svg" alt="" />
      <div className="footer p-0 m-0">
        <div className="flex justify-between pb-0">
          <div className="p-16 footerBtn">
            <FooterButtons val="HOME"></FooterButtons>
            <FooterButtons val="SCHEDULE"></FooterButtons>
            <FooterButtons val="EVENTS"></FooterButtons>
            <FooterButtons val="SPONSORS"></FooterButtons>
            <FooterButtons val="TEAM"></FooterButtons>
          </div>
          <Socials text="FOLLOW US ON"></Socials>
        </div>
        <Details></Details>
      </div>
    </>
  );
}
