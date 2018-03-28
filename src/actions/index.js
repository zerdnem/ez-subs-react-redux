export const LANGUAGES = "LANGUAGES";
export const SUBTITLES = "SUBTITLES";
export const GETSUBS = "GETSUBS";

export const languageOptions = () => dispatch => {
  const languages = ["eng", "rus", "ger"];
  return dispatch({
    type: LANGUAGES,
    languages: languages
  });
};

export const receiveSubs = data => ({ type: SUBTITLES, subtitles: data });

export const requestSubs = () => ({ type: GETSUBS });

export const fetchSubs = postData => dispatch => {
  dispatch(requestSubs());
  return fetch(
    `http://localhost:8000/api/${postData.title}/${postData.language}`,
    {
      method: "POST"
    }
  )
    .then(res => res.json())
    .then(data => dispatch(receiveSubs(data)));
};
