import { getInitialData } from "./../utils/api";
import { receiveUsers, addAnswerToUser } from "./users";
import { receiveQuestions, addAnswerToQuestion } from "./questions";
import { setAuthUser } from "./authUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser("sarahedo"));
    });
  };
}

export function handleSaveAnswer(authUser, question, answer) {
  return (dispatch) => {
    dispatch(addAnswerToUser(authUser, question, answer));
    dispatch(addAnswerToQuestion(authUser, question, answer));
  };
}
