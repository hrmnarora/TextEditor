import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid white",
  // });

  let myStyle = {
    color : props.mode==='dark'?'white':'#042743',
    backgroundColor: props.mode==='dark'?'#042743':'white',
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ex amet voluptas nam accusantium deserunt beatae
                dolorum quas non delectus.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              style={myStyle}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur fugiat eius nam a tempora? Cum, exercitationem.
                Neque illo exercitationem distinctio?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Transform your Text
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt nulla atque suscipit voluptatibus alias, voluptates
                molestiae consequuntur maiores iste error.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
