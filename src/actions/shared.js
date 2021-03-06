import { getInitialData, saveAnswer, saveQuestion } from "./../utils/api";
import { receiveUsers, addAnswerToUser, addQuestionToUser } from "./users";
import {
  receiveQuestions,
  addAnswerToQuestion,
  addNewQuestion,
} from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleSaveAnswer(authUser, question, answer) {
  return (dispatch) => {
    dispatch(addAnswerToUser(authUser, question, answer));
    dispatch(addAnswerToQuestion(authUser, question, answer));
    saveAnswer(authUser, question, answer);
  };
}

export function handleAddNewQuestion(optionOne, optionTwo, authUser) {
  return (dispatch) => {
    saveQuestion({ optionOne, optionTwo, authUser }).then((question) => {
      dispatch(addNewQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
}
