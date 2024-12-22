import React from "react";

const We_Need_Marketing = () => {
  return (
    <>
      <p className="fs-1 fw-bold text-center mb-3">
        Elevate <span className="text-primary">Real Estate Success</span> with{" "}
        <br /> Osumare's Digital Expertise
      </p>
      <h1 className="text-center">
        <button
           className="btn btn-primary fw-bold w-50 btn-lg"
           style={{
             borderRadius: "50px",
           }}
        >
          Get Started
        </button>
      </h1>

      <div className="text-center">
        
        <img
          className="img-fluid"
          src="./assets/we_need_marketing_photo.png"
        ></img>
      </div>
    </>
  );
};

export default We_Need_Marketing;
