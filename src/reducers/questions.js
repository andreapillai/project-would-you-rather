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
      return {
        ...state,
        [action.question]: {
          ...state[action.question],
          [action.answer]: {
            ...state[action.question][action.answer],
            votes: state[action.question][action.answer].votes.concat(
              action.authUser
            ),
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
