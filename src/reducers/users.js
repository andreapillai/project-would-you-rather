import {
  RECEIVE_USERS,
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
} from "./../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_USER:
      const { authUser, question, answer } = action;
      return {
        ...state,
        [authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[authUser].answers,
            [question]: answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
}
