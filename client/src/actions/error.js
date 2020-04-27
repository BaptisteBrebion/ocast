export const CHANGE_ERROR_VALUE = "CHANGE_ERROR_VALUE";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const changeErrorValue = (error) => ({
  type: CHANGE_ERROR_VALUE,
  error,
})

export const removeError = () => ({
  type: REMOVE_ERROR,
})