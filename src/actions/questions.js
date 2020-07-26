export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswerToQuestion(authUser, question, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    question,
    answer,
  };
}

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}
