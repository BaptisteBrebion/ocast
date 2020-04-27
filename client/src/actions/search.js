export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
export const SEARCH_CANDIDATE = "SEARCH_CANDIDATE";
export const CANDIDATE_SEARCH_RESULT = "CANDIDATE_SEARCH_RESULT";
export const SAVE_SEARCH_MESSAGE_VALUE = "SAVE_SEARCH_MESSAGE_VALUE";

export const changeSearchValue = (value, key) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
  key
});

export const searchCandidate = () => ({
  type: SEARCH_CANDIDATE
});

export const candidateSearchResult = result => ({
  type: CANDIDATE_SEARCH_RESULT,
  result
});

export const saveSearchMessageValue = (message) => ({
  type: SAVE_SEARCH_MESSAGE_VALUE,
  message,
})
