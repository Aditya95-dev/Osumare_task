import React from "react";

const Peace_Of_Mind = () => {
  return (
    <>
      <div
        className="container-fluid text-center mt-5"
        style={{
          background:
            "linear-gradient(135deg,rgb(180, 234, 241),rgb(255, 255, 255))",
        }}
      >
        <h1>Your Peace of Mind</h1>
        <h3 className="text-black-50">
        Through our conversion-focused strategies, we ensure that property <br/> seekers are not just visitors, but engaged prospects ready to make <br/> their next move in the real estate market

        </h3>
        <button
           className="btn btn-primary fw-bold w-50 btn-lg mb-3"
           style={{
             borderRadius: "50px",
           }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Peace_Of_Mind;
