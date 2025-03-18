import React from "react";
import SectionTitle from "../../commons/section-title/SectionTitle";
import QuestionsCard from "../../commons/question-card/QuestionsCard";
import { questionsAndAnswers } from "../../../utils/testArrays";

const QuestionsComponent = () => {
  
  return (
    <div className="questions-component">
      <SectionTitle title={"Preguntas frecuentes"} wordIndex={2} />
      <QuestionsCard questionsAndAnswers={questionsAndAnswers} />
    </div>
  );
};

export default QuestionsComponent;
