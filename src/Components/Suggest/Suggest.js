import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Suggest.css";
import { Rotate } from "react-reveal";
import { supabase } from "../../supabaseClient";
import Opinion from "../Opinion/Opinion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Suggest() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [suggests, setSuggests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedSuggests, setPaginatedSuggests] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const sendSuggestNotify = () =>
    toast.success("نظر شما ارسال شد", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

  let pageSize = 3;
  let pagesNumbers;

  const pagesCount = Math.ceil(suggests.length / pageSize);
  pagesNumbers = Array.from(Array(pagesCount).keys());

  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownSuggests = suggests.slice(startIndex, endIndex);
    setPaginatedSuggests(allShownSuggests);
  }, [currentPage]);

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

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
        let filterData = data.filter((suggest) => suggest.accept == true);
        setSuggests(filterData);
        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize;
        let allShownSuggest = filterData
          .sort((a, b) => b.id - a.id)
          .slice(startIndex, endIndex);
        setPaginatedSuggests(allShownSuggest);
        console.log(data);
      }
    } catch (error) {
      alert(error);
    }
  }

  async function createSuggest(event) {
    let newSuggest = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      opinion: opinion,
      date: time,
    };

    if (firstname && lastname && email && opinion) {
      sendSuggestNotify();
      event.preventDefault();
      setDisabled(true);
      event.target.disabled = true;
      setTimeout(() => {
        event.target.disabled = false;
        setDisabled(false);
      }, 3000);
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
      setFirstname("");
      setLastname("");
      setEmail("");
      setOpinion("");
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
                {disabled ? "در حال ارسال..." : "ارسال"}
              </button>
            </form>
            {useMemo(() => {
              return paginatedSuggests.map((suggest) => (
                <Opinion suggest={suggest} />
              ));
            }, [paginatedSuggests])}
          </Rotate>
          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {pagesNumbers.reverse().map((pageNumber) => (
                <li
                  key={pageNumber + 1}
                  className={
                    pageNumber + 1 === currentPage
                      ? "page-item active"
                      : "page-item"
                  }
                  onClick={() => changePaginate(pageNumber + 1)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="page-link">{pageNumber + 1}</span>
                </li>
              ))}
            </ul>
          </nav>
        </Col>
        <Col xxl={4} xl={4} md={12} sm={12} className="last-img">
          <img src="./images/suggestleft.jpg" alt="" />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}
