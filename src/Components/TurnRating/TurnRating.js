import React, { useEffect, useRef, useState } from "react";
import "./TurnRating.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePick from "./DatePicker/DatePick";
import { supabase } from "../../supabaseClient";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "react-bootstrap";

export default function TurnRating() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNamePersian, setIsNamePersian] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isNumberCorrect, setIsNumberCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataNumbers, setDataNumbers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const nameInput = useRef();
  const numberInput = useRef();

  const turnNotify = () =>
    toast.success("نوبت با موفقیت ثبت شد", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      delay: 3000,
    });

  function validName() {
    if (name) {
      just_persian(name);
    } else if (!name) {
      setIsNameValid(true);
    }
  }

  function validNumber() {
    if (!phoneNumber) {
      setIsNumberValid(true);
      setIsNumberCorrect(false);
    } else if (!getMobiles(phoneNumber).length) {
      setIsNumberCorrect(true);
      setIsNumberValid(false);
    } else {
      setIsNumberCorrect(false);
      setIsNumberValid(false);
    }
  }
  useEffect(() => {
    nameInput.current.addEventListener("blur", () => {
      validName();
    });
    numberInput.current.addEventListener("blur", () => {
      validNumber();
    });
  }, [name, phoneNumber]);

  let current = new DateObject({ calendar: persian, locale: persian_fa });
  const [date, setDate] = useState(current);

  var mobileReg =
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
    junkReg = /[^\d]/gi,
    persinNum = [
      /۰/gi,
      /۱/gi,
      /۲/gi,
      /۳/gi,
      /۴/gi,
      /۵/gi,
      /۶/gi,
      /۷/gi,
      /۸/gi,
      /۹/gi,
    ],
    num2en = function (str) {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persinNum[i], i);
      }
      return str;
    },
    getMobiles = function (str) {
      var mobiles = num2en(str + "").match(mobileReg) || [];
      mobiles.forEach(function (value, index, arr) {
        arr[index] = value.replace(junkReg, "");
        arr[index][0] === "0" || (arr[index] = "0" + arr[index]);
      });
      return mobiles;
    };

  console.log(getMobiles("08159622070"));

  function just_persian(str) {
    var p = /^[\u0600-\u06FF\s]+$/;

    if (!p.test(str)) {
      setIsNamePersian(true);
      setIsNameValid(false);
    } else {
      setIsNamePersian(false);
      setIsNameValid(false);
    }

    return p.test(str);
  }

  useEffect(() => {
    getNumber();
  }, [phoneNumber]);

  async function getNumber() {
    try {
      const { data, error } = await supabase
        .from("turnrating")
        .select("number");

      if (data != null) {
        console.log(data);
        setDataNumbers(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createTurnRating(e) {
    e.preventDefault();
    getNumber();
    const newTurn = {
      name: name,
      number: phoneNumber,
      date: date.format("YYYY/MM/DD - HH:mm"),
    };

    if (
      name &&
      just_persian(name) &&
      phoneNumber &&
      date &&
      getMobiles(phoneNumber).length
    ) {
      let repNumber = dataNumbers.some((dataNumber) => {
        return dataNumber.number == phoneNumber;
      });
      console.log(repNumber);

      if (!repNumber) {
        turnNotify();

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 6000);
        try {
          const { data, error } = await supabase
            .from("turnrating")
            .insert(newTurn)
            .single();

          if (error) throw error;
          if (data != null) {
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setShowAlert(true);
      }
    } else {
      if (!date) {
        alert("تاریخ مورد نظر را انتخاب کنید");
      }
      validName();
      validNumber();
    }
  }

  function validate(evt) {
    let theEvent = evt || window.event;
    // console.log(evt);
    let key = theEvent.keyCode || theEvent.which;
    console.log(key, theEvent.keyCode, theEvent.which);
    key = String.fromCharCode(key);
    console.log(key);

    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  return (
    <div className="turn-rating">
      <p className="welcome-to-turn">
        به سامانه نوبت دهی ماساژ آریامن خوش آمدید...
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameInput}
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isNameValid && (
            <p className="error">نام و نام خانوادگی خود را وارد کنید.</p>
          )}
          {isNamePersian && (
            <p className="error">
              نام و نام خانوادگی خود را به فارسی وارد کنید.
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control
            ref={numberInput}
            type="tel"
            placeholder="شماره تلفن خود را وارد کنید..."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxLength="11"
            onKeyPress={validate}
          />
          {isNumberValid && (
            <p className="error">شماره تلفن خود را وارد کنید.</p>
          )}
          {isNumberCorrect && (
            <p className="error">شماره تلفن خود را به درستی وارد کنید.</p>
          )}
        </Form.Group>
        <p className="pickDate-text">تاریخ و ساعت مورد نظر را انتخاب کنید.</p>
        <DatePick date={date} setDate={setDate} />
        <Button
          variant="primary"
          type="submit"
          onClick={createTurnRating}
          disabled={isLoading}
        >
          {isLoading ? "در حال ایجاد نوبت" : "گرفتن نوبت"}
        </Button>
      </Form>
      <ToastContainer />
      <hr />
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>شماره ی وارد شده قبلا ثبت شده است.</Alert.Heading>
        </Alert>
      )}
    </div>
  );
}
