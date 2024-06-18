import React from "react";

export  const Technologies = (props) => {
  return (
    <div id="technologies" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Technologies</h2>
        </div>
        <div style={{
             display: "flex",
             width: "100%",
             justifyContent: "space-between"

        }}>
    <p className="research">NEXT.JS</p>
    <p className="research">Python</p>
    <p className="research">Tensor flow</p>
    <p className="research">Firebase</p>

        </div>
      </div>
    </div>
  );
};

