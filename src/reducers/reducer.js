import { GETSUBS, LANGUAGES, SUBTITLES } from "../actions";

const initialState = {
  languages: [],
  subtitles: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LANGUAGES:
      return {
        ...state,
        languages: action.languages
      };
    case SUBTITLES:
      return {
        ...state,
        isFetching: false,
        subtitles: action.subtitles
      };
    case GETSUBS:
      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
}
