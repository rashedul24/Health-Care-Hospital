import React from "react";
import { Accordion } from "react-bootstrap";
import "./Vision.css";
import mission from "../../../images/mission/mission.jpg";

const Vision = () => {
  return (
    <div className="mission-vision my-3">
      <h2 className="my-3">Our Mission & Vision</h2>
      <div className="row">
        <div className="col-lg-6">
          <img src={mission} alt="" />
        </div>

        <div className="col-lg-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>MISSION</Accordion.Header>
              <Accordion.Body>
                Nowadays, almost everywhere patients are not getting the
                services that they should or deserve due to lack of concern of
                the authorities to provide better healthcare services. We don't
                want to walk to their same path rather we want to stand against
                those so called heath care organizations. Health Care Hospital's
                mission is to provide world class healthcare services to it's
                patients at an affordable cost. We want to see our patients are
                satisfied and happy after taking our services.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>VISION</Accordion.Header>
              <Accordion.Body>
                Health Care Hospital wants to see themselves as one of the best
                hospital in Dhaka & one of the leading hospital in Bangladesh.
                We want to set an example by providing world class healthcare
                services to our patients. Dhaka Health Care Hospital will expand
                it's services & facilities in near future & provide much better
                services to the patients.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Vision;
