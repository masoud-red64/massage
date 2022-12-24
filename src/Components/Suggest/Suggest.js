import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Suggest.css";
import { Rotate } from "react-reveal";

export default function Suggest() {
  return (
    <Container fluid className="suggest">
      <Row>
        <Col xxl={4} xl={4} md={6}>
          <img src="./images/suggestright.jpg" alt="" />
        </Col>
        <Col xxl={4} xl={4} md={6}>
          <Rotate bottom right delay={500}>
            <h1>منتظر انتقادات و پیشنهادات شما هستیم</h1>
            <form action="">
              <div className="name-lastname">
                <input
                  type="text"
                  className="name"
                  placeholder="نام *"
                  required
                />
                <input
                  type="text"
                  className="lastname"
                  placeholder="نام خانوادگی *"
                  required
                />
              </div>
              <div className="site-email">
                <input
                  type="text"
                  className="name"
                  placeholder="ایمیل *"
                  required
                />
                <input type="text" className="lastname" placeholder="وب سایت" />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="پیام *"
                required
              ></textarea>
              <button className="send" type="submit">
                ارسال
              </button>
            </form>
          </Rotate>
        </Col>
        <Col xxl={4} xl={4} md={12} sm={12} className="last-img">
          <img src="./images/suggestleft.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
