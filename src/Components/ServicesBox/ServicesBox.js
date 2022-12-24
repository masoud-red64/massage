import React from "react";
import "./ServicesBox.css";
import { Container, Row, Col } from "react-bootstrap";
import ServiceBox from "./ServiceBox";

export default function ServicesBox() {
  return (
    <Container fluid className="services-box">
      <div className="ser">
        <Row>
          <Col xxl={3} xl={3} md={6} sm={12}>
            <ServiceBox
              img={"./images/serviceBox1.jpg"}
              title={"ماساژ سر و صورت"}
              text={
                "از ماساژ سر و صورت برای آرامش استفاده‌ های بسیاری می‌شود. عموما افراد زیادی در هنگام ماساژ از ماساژور می‌خواهند که زمان زیادی را روی صورتشان بگذراند. این دلیل بیشتر از موارد زیبایی که ماساژ صورت به همراه خود دارد، بیشتر به دلیل آرامش خاص آن است."
              }
            />
          </Col>
          <Col xxl={3} xl={3} md={6} sm={12}>
            <ServiceBox
              img={"/images/serviceBox2.jpg"}
              title={"ماساژ تخصصی"}
              text={
                "ماساژ تخصصی عبارتست از دست ورزی بر روی بافتهای نرم بدن. این ماساژ به رهایی از استرس و فشار عضلانی و درد ناشی از صدمات و سرعت بهبود ناراحتیهای حاد و مزمن كمك می كند.از ماساژ تخصصی می توان به ماساژ سنگ داغ، ماساژ با شمع و …اشاره کرد."
              }
            />
          </Col>
          <Col xxl={3} xl={3} md={8} sm={12}>
            <ServiceBox
              img={"./images/serviceBox3.jpg"}
              title={"ماساژ بدن"}
              text={
                "هدف اصلی ماساژ بدن، کمک به بهبود بدن جهت افزایش سلامتی و آرامش است. این به معنای متعادل سازی نیازهای روانی، عاطفی و فیزیکی فرد است.انواع تکنیک و سبک ماساژ بر اساس مهارت، دامنه تمرین و هدف اصلی جلسه ماساژ تعیین می‌شود."
              }
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
