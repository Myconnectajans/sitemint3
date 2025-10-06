import React from "react";

const SectionWrapper = ({ children, className = "", style = {} }) => {
  return (
    <section 
      className={`section-wrapper ${className}`}
      style={{
        padding: '80px 0',
        ...style
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;




