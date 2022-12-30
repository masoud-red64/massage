import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Suggest.css";
import { Rotate } from "react-reveal";
import { supabase } from "../../supabaseClient";
import Opinion from "../Opinion/Opinion";

export default function Suggest() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [suggests, setSuggests] = useState([]);

  let currentdate = new Date();
  let date = new Date().toLocaleDateString("fa-IR");
  let time = `${currentdate.getHours()}:${
    currentdate.getMinutes() < 10
      ? "0" + currentdate.getMinutes()
      : currentdate.getMinutes()
  }:${
    currentdate.getSeconds() < 10
      ? "0" + currentdate.getSeconds()
      : currentdate.getSeconds()
  }  -  ${date}`;

  useEffect(() => {
    getSuggest();
    console.log(time);
  }, []);

  async function getSuggest() {
    try {
      const { data, error } = await supabase
        .from("suggests")
        .select("*")
        .limit(10);

      if (error) throw error;

      if (data != null) {
        setSuggests(data);
        console.log(data);
      }
    } catch (error) {
      alert(error);
    }
  }

  async function createSuggest(event) {
    event.preventDefault();
    let newSuggest = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      opinion: opinion,
      date: time,
    };

    if (firstname && lastname && email && opinion) {
      try {
        const { data, error } = await supabase
          .from("suggests")
          .insert(newSuggest)
          .single();

        if (error) throw error;
        if (data != null) {
          console.log(data);
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <Container fluid className="suggest">
      <Row>
        <Col xxl={4} xl={4} md={6}>
          <img loading="lazy" src="./images/suggestright.jpg" alt="" />
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
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  className="lastname"
                  placeholder="نام خانوادگی *"
                  required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="site-email">
                <input
                  type="text"
                  className="name"
                  placeholder="ایمیل *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
              ></textarea>
              <button className="send" type="submit" onClick={createSuggest}>
                ارسال
              </button>
            </form>
            {suggests.reverse().map((suggest) => (
              <Opinion suggest={suggest} />
            ))}
          </Rotate>
        </Col>
        <Col xxl={4} xl={4} md={12} sm={12} className="last-img">
          <img src="./images/suggestleft.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
