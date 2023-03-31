import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  const conatactNameRef = useRef();
  const contactmessageRef = useRef();
  const contactEmailRef = useRef();
  const contactmobileRef = useRef();


  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
  <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={conatactNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type=""
                    placeholder="Mobile No."
                    required
                    ref={contactmobileRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={contactEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text-area"
                    placeholder="Message"
                    required
                    ref={contactmessageRef}
                  />
                </div>
                
                <button type="submit" className="addTOCart__btn">
                  Contact Us
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
