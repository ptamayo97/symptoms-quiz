import React, { Component } from "react";
import QuestionWrapper from "../components/QuestionWrapper";

class Quiz extends Component {
  state = {
    quiz: {
      q1: { q: "Do you have a fever?", a: "" },
      q2a: {
        q: "Are you experiencing shorteness of breath?",
        a: "",
        result: {
          yes: {
            affliction: "You MAY have CORONAVIRUS",
            symptoms: ["Cough", "Fatigue", "Weakness", "Exhaustion"]
          },
          no: {
            affliction: "You MAY have the flu",
            symptoms: ["Cough", "Fatigue", "Weakness", "Exhaustion"]
          }
        }
      },
      q2b: {
        q: "Do you have itchy eyes?",
        a: "",
        result: {
          yes: {
            affliction: "You MAY have allergies",
            symptoms: ["Sneezing", "Runny Nose"]
          },
          no: {
            affliction: "You MAY have the common cold",
            symptoms: ["Sneezing", "Runny Nose", "Mild Chest Discomfort"]
          }
        }
      }
    }
  };

  handleAnswer = (event, btnId) => {
    const target = event.target;
    const value = target.value;
    const updatedQuiz = { ...this.state.quiz };
    const updatedQuizAnswer = { ...updatedQuiz[btnId] };
    updatedQuizAnswer.a = value;
    updatedQuiz[btnId] = updatedQuizAnswer;
    this.setState({
      quiz: updatedQuiz
    });
    console.log({ updatedQuiz });
  };

  render() {
    return (
      <div className="container">
        <QuestionWrapper
          quiz={this.state.quiz}
          handleAnswer={this.handleAnswer}
        />
      </div>
    );
  }
}

export default Quiz;
