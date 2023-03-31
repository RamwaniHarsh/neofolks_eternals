import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const signupAddressRef = useRef();
  const signupMobileRef = useRef();
  const signupDobRef = useRef();
  const signupgenderRef = useRef();
  const signupheightRef = useRef();
  const signupweightRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
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
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type=""
                    placeholder="Mobile No."
                    required
                    ref={signupMobileRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="Number"
                    placeholder="Date of Birth"
                    required
                    ref={signupDobRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    ref={signupAddressRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Gender"
                    required
                    ref={signupgenderRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Height"
                    required
                    ref={signupheightRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Weight"
                    required
                    ref={signupweightRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
               
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
