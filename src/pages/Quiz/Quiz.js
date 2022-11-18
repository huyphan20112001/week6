import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Quiz.module.scss";
import { questionList } from "../../constants/constants";
import { ChoiceIcon, ChoiceIconSelected } from "../../components/Icon/Icon.js";

const cx = classNames.bind(styles);

function Quiz() {
  const [isTaking, setIsTaking] = useState(false);
  const [active, setActive] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState("00:00:30");
  const [choose, setChoose] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [listAnswer, setListAnswer] = useState(Array(questionList.length));
  const [hidePopUp, setHidePopUp] = useState(true);

  const ref = useRef();

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:30");
    ref.current && clearInterval(ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  };
  const handleTakeTest = () => {
    setIsTaking(true);
    setCurrentQuestion(1);
    setActive(1);
    clearTimer(getDeadTime());
    setListAnswer([]);
  };
  const handleSelectQuestion = (id) => {
    setActive(id);
    setCurrentQuestion(id);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setActive(currentQuestion + 1);
    if (active + 1 > questionList.length) {
      setActive(questionList.length);
      setCurrentQuestion(questionList.length);
    }
    setChoose(0);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setActive(currentQuestion - 1);
    if (active - 1 < 1) {
      setActive(1);
      setCurrentQuestion(1);
    }
    setChoose(0);
  };

  const handleChoose = (itemAnswer, id) => {
    const newList = listAnswer;
    newList[currentQuestion - 1] = itemAnswer;
    setListAnswer(newList);
    setChoose(id);
  };

  const handleSubmit = () => {
    let newScore = 0;
    setScore(0);
    questionList.forEach((question, index) => {
      // console.log(question.result, listAnswer[index]);
      if (question.result === listAnswer[index]) {
        // console.log(score);
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
    setIsTaking(false);
    setHidePopUp(false);
    setActive(0);
  };

  useEffect(() => {
    if (isTaking && timer === "00:00:00") {
      handleSubmit();
    }
  }, [timer]);

  useEffect(() => {
    questionList.map((item, indexList) => {
      // console.log(questionList[index].answer);
      // console.log(answer, index);
      const { answer } = item;
      answer.forEach((itemAnswer, indexAnswer) => {
        // console.log(listAnswer);
        listAnswer.forEach((i, index) => {
          // console.log(i);
          // console.log(itemAnswer);
          // console.log("current: ", currentQuestion);
          // console.log("index", index + 1);
          // console.log(i === itemAnswer, currentQuestion === index + 1);
          // console.log(i === itemAnswer && currentQuestion === index + 1);
          // console.log(i);
          // console.log(i === itemAnswer && currentQuestion === index + 1);
          i === itemAnswer &&
            currentQuestion === index + 1 &&
            setChoose(indexAnswer + 1);
        });
      });
    });
  }, [currentQuestion]);

  return (
    <div className={cx("quiz-page")}>
      {showScore && (
        <>
          <div className={cx("show-score", { hidden: !hidePopUp })}>
            <span>
              Your scored: {score}/{questionList.length}
            </span>
            <button onClick={() => setHidePopUp(true)}>Ok</button>
          </div>
          <div className={cx("overlay", { hidden: !hidePopUp })}></div>
        </>
      )}
      <div className={cx("wrapper-content")}>
        <div className={cx("container-quiz")}>
          <div className={cx("quiz")}>
            <div className={cx("heading")}>
              <h1>Quiz App</h1>
            </div>
            <div className={cx("wrapper-content-number")}>
              <div className={cx("content-left")}>
                <div className={cx("question-number")}>
                  <div className={cx("wrapper-number")}>
                    <div className={cx("question-heading")}>
                      Question Palette
                    </div>
                    <div className={cx("number-list")}>
                      {questionList.map((question) => (
                        <button
                          className={cx("number-item", {
                            active: active === question.id,
                          })}
                          key={question.id}
                          onClick={() => handleSelectQuestion(question.id)}
                        >
                          {question.id}
                        </button>
                      ))}
                    </div>
                    <button
                      ref={ref}
                      disabled={!isTaking}
                      onClick={handleSubmit}
                      className={cx("submit-test")}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("content-right")}>
                <div className={cx("question-content")}>
                  <div className={cx("time")}>{timer}</div>
                  <div className={cx("detail")}>
                    {!isTaking ? (
                      <img
                        src="https://toeic-testpro.com/images/practice-in-progress.svg"
                        alt="prev-take"
                      />
                    ) : (
                      questionList
                        .filter((question) => question.id === currentQuestion)
                        .map((item, index) => {
                          return (
                            <>
                              <div
                                key={index}
                                className={cx("detail-question")}
                              >
                                {item.id}. {item.question}
                              </div>
                              <div className={cx("detail-anwser")}>
                                {item.answer.map((itemAnswer, index) => (
                                  <div
                                    onClick={() =>
                                      handleChoose(itemAnswer, index + 1)
                                    }
                                    key={index}
                                    className={cx("answer-item", {
                                      selected: choose === index + 1,
                                    })}
                                  >
                                    <div className={cx("choice")}>
                                      <div
                                        className={cx("choice-icon-wrapper")}
                                      >
                                        {choose === index + 1 ? (
                                          <ChoiceIconSelected
                                            className={cx("choice-icon")}
                                          />
                                        ) : (
                                          <ChoiceIcon
                                            className={cx("choice-icon")}
                                          />
                                        )}
                                      </div>
                                      {index + 1}. {itemAnswer}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          );
                        })
                    )}
                  </div>
                  <div className={cx("action")}>
                    {!isTaking ? (
                      <div className={cx("action-take")}>
                        <button
                          onClick={handleTakeTest}
                          className={cx("take-btn")}
                        >
                          Take Test
                        </button>
                      </div>
                    ) : (
                      <div className={cx("action-nextPrev")}>
                        <button
                          disabled={active === 1}
                          onClick={handlePrevQuestion}
                          className={cx("prev-btn")}
                        >
                          Previous
                        </button>
                        <button
                          disabled={questionList.length === active}
                          onClick={handleNextQuestion}
                          className={cx("next-btn")}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
