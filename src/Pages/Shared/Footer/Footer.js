import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // fontawesome icon
  const copyRight = <FontAwesomeIcon icon={faCopyright} />;
  return (
    <div className="text-center bg-primary text-white rounded p-2 pt-5">
      <h2>Health Care</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h4>Office Address</h4>
          <p>Sirajgonj Road(Hatikumrul), Sirajgonj.</p>

        </div>
        <div className="col-md-4">
        <h4>Talk To Expert</h4>
          <p>(+880) 123 456 7890</p>
        </div>
        <div className="col-md-4">
        <h4>Email Us</h4>
          <p>abc@healthcare.com</p>
        </div>
      </div>
        <p className='mt-2'>Copyright {copyRight} Health Care Hospital. All Rights Reserved.</p>
      </div>
  );
};

export default Footer;