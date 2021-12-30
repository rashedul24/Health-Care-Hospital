import React from "react";
import { Accordion } from "react-bootstrap";
import about from '../../images/mission/mission.jpg';

const About = () => {
  return (
    <div className="mission-vision ">
      <h2 className="my-3">About Us</h2>
      <div className="row">
        <div className="col-lg-6">
          <img src={about} alt="" />
        </div>

        <div className="col-lg-6">
          <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Us</Accordion.Header>
              <Accordion.Body>
                Health Care Hospital is one of the fastest growing hospitals in Sirajgonj, Rajshahi. Health Care Hospital always strives to
                provide the best service to it's patients at an affordable
                price. This hospital consists of the following departments
                Emergency, General Surgery, Gyne & Obs, Ear Nose Throat (ENT), Medicine, Dental Surgery & Operation Theatre(OT). Health Care  Hospital has 24hrs Emergency, Orthopedics, Pharmacy, Ambulance,
                Physiotherapy, Echo Cardiogram, Colour Dopler, ECG, Digital
                X-Ray, Ultrasonography, Digital Lab, C-Arm OT, Post Operative Ward, AC/Non-Ac Cabin, & much more services. We always stay
                beside the patients not due to business but as our
                responsibility.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
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
            <Accordion.Item eventKey="2">
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
      <div className="mt-5">
        <h2>Contct Us</h2>
        <hr />
        <p>Address: Health Care Hospital, Sirajgonj Road(Hatikumrul), Sirajgonj. Rajshahi. </p>
        <p>Mobile: 123456789</p>
        <p>Email: abc@healthcare.com</p>
      </div>

    </div>
  );
};

export default About;
