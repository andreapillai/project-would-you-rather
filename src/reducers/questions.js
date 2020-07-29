import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_NEW_QUESTION,
} from "./../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { question, answer, authUser } = action;
      return {
        ...state,
        [question]: {
          ...state[question],
          [answer]: {
            ...state[question][answer],
            votes: state[question][answer].votes.concat(authUser),
          },
        },
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
