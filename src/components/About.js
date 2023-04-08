import React, { useState } from "react";

export default function About(props) {

  const [myStyle] = useState({
    color: `${props.textcol}`,
    backgroundColor: `${props.cbc}`
  });
return (
  <div className="container" style={myStyle}>
    <h1 color={`${props.textcol}`} backgroundcolor={`${props.cbc}`}>About Us</h1>
    <div className="accordion my-4 pt-4" id="accordionExample">
      <div className="accordion-item">
        
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            style={myStyle}
            backgroundColor={props.cbc}
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong>#We Are Browser Compatible</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Always works like butter on every browser so that you can have fun using our textutils app
          </div>
        </div>
      </div>
      <div className="accordion-item btn-primary">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            style={myStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>#Free and Free and Free! To Use</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Free For you always so that you can take the advantage of today's technology
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            style={myStyle}
            aria-controls="collapseThree"
          >
            <strong>#All Services Available</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            We Have All the services always(24/7) Ready For You so why look for others, come now!
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
