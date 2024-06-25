import React from "react";

export default function Details() {
  return (
    <div className="flex justify-around Details">
      <div>
        <img className="festImage pb-4" src="../images/zeitgeist.jfif" alt="" />
        <h1 className="textBelowImage text-xl relative right-16">Indian institute of Technology Ropar</h1>
      </div>
      <div className=" text-sm">
        <h1 className="text-lg">Location</h1>
        <p>Indian Institute of Technology Ropar</p>
        <p>Rupnagar, Punjab, India</p>
        <p className="pb-4">Pincode: 140001</p>
        <h1 className="text-3xl hidden contactUs mb-1">Contact us</h1>
        <div className="contactUs">
          <div className="flex-col mr-12">
            <h1 className="text-lg">Email</h1>
            <p>abcxyz@gmail.com</p>
            <br></br>
          </div>
          <div className="flex-col">
            <h1 className="text-lg">Phone</h1>
            <p>+91-9357316XXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
