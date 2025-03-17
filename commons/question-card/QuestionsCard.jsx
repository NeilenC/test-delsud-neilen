import React, { useState } from "react";
import IconButton from "../styled-icon-button/IconButton";
import "./questionCard.css";

const QuestionsCard = ({ questionsAndAnswers }) => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const handleToggleAnswer = (index) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  return (
    <div className="question-card-container">
      {questionsAndAnswers?.map((options, index) => {
        return (
          <div key={index} className="question-card">
            <div className="question-card-question">
              <p>{options.question}</p>
              <div className="question-card-button">
                <IconButton
                  icon="/arrow-down.png"
                  type="filled"
                  color="var(--background-icon-button-light)"
                  onClick={() => handleToggleAnswer(index)}
                  size={30}
                  iconW={10}
                  iconH={5}
                />
              </div>
            </div>
            {openAnswer === index && (
              <div className="question-card-answer-container">
                <p className="question-card-answer">{options.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsCard;
