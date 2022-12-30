import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./Opinion.css";

export default function Opinion(props) {
  const [isShowAnswerInput, setIsShowAnswerInput] = useState(false);
  const [answer, setAnswer] = useState("");
  const [disableAnswer, setDisableAnswer] = useState(false);

  const suggest = props.suggest;

  const input = useRef();
  const answerBtn = useRef();

  const sendOpinion = async (id) => {
    try {
      const { data, error } = await supabase
        .from("suggests")

        .update({ answer: answer })
        .eq("id", id);

      if (error) throw error;
      if (data != null) {
        console.log(data);
      }
    } catch (error) {
      alert(error);
    }

    setIsShowAnswerInput(false);
    setDisableAnswer(true);
  };

  //   useEffect(() => {
  //     showAnswerInput()
  // }, [isShowAnswerInput]);

  const showAnswerInput = async () => {
    await setIsShowAnswerInput(true);
    input.current.focus();
  };

  return (
    <>
      {suggest.accept && (
        <div className="opinion">
          <div className="header-opinion">
            <div className="first-last-name-opinion">
              <h3 className="firstname-opinion">{suggest.firstname}</h3>
              <h3 className="lastname-opinion">{suggest.lastname}</h3>
            </div>
            <p className="date-opinion">{suggest.date}</p>
            <div className="profile-opinion">
              <img src="./images/concat.jpg" alt="" />
            </div>
          </div>
          <p className="message-opinion">{suggest.opinion}</p>
          <div className="footer-opinion">
            {isShowAnswerInput ? (
              <button
                className="send-btn-opinion"
                onClick={() => sendOpinion(suggest.id)}
              >
                ارسال
              </button>
            ) : (
              <button
                ref={answerBtn}
                className="btn-opinion"
                onClick={showAnswerInput}
                disabled={disableAnswer || suggest.answer}
              >
                پاسخ
              </button>
            )}
          </div>
          {suggest.acceptAnswer && (
            <p className="answer-opinion-message">
              <span>ادمین: </span>
              {suggest.answer}
            </p>
          )}
          {isShowAnswerInput && (
            <input
              ref={input}
              type="text"
              className="answer-opinion-input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          )}
        </div>
      )}
    </>
  );
}
