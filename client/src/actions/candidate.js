export const CHANGE_VALUE_CANDIDATE = "CHANGE_VALUE_CANDIDATE";
export const SAVE_PROFILE = "SAVE_PROFILE";
export const COUNT_ALL_CANDIDATES = "COUNT_ALL_CANDIDATES";
export const SAVE_COUNTER = "SAVE_COUNTER";
export const SEE_RECRUITER_PROFILE = "SEE_RECRUITER_PROFILE";
export const SAVE_RECRUITER_PROFILE = "SAVE_RECRUITER_PROFILE";

export const changeValueCandidate = (value, key) => ({
  type: CHANGE_VALUE_CANDIDATE,
  value,
  key
});

export const saveProfile = user => ({
  type: SAVE_PROFILE,
  user
});

export const countAllCandidates = () => ({
  type: COUNT_ALL_CANDIDATES
});

export const saveCounter = count => ({
  type: SAVE_COUNTER,
  count
});

export const seeRecruiterProfile = (recruiterId) => ({
  type: SEE_RECRUITER_PROFILE,
  recruiterId
})

export const saveRecruiterProfile = (recruiter) => ({
  type: SAVE_RECRUITER_PROFILE,
  recruiter
})
