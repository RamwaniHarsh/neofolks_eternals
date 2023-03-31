import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function subcription() {

    return (
        <div>
    <Helmet title="Subcription">
      <CommonSection title="Subcription Plans" />
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12" className="m-auto text-center">
              <div className="form my-5 category_item" >
                <div className="form__group">
                  <h3>Basic</h3>
                  <h6>299</h6>
                  <Link to="/payment">
                 <button type="submit" className="addTOCart__btn">Buy</button>
              </Link>
                </div>
              </div>
              <div className="form my-5 category__item" >
                <div className="form__group">
                  <h3>Standard</h3>
                  <h6>499</h6>
                  <Link to="/payment">
                 <button type="submit" className="addTOCart__btn">Buy</button>
              </Link>
                </div>
              </div>
              <div className="form my-5 category__item" >
                <div className="form__group">
                  <h3>Premium</h3>
                  <h6>499</h6>
                  <Link to="/payment">
                 <button type="submit" className="addTOCart__btn">Buy</button>
              </Link>
                </div>
              </div>
             
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
        </div>
    )
}

export default subcription;