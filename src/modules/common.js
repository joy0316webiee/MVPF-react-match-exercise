export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const defaultVisualState = {
  loading: false,
  errors: []
};

export const setVisualState = (state, code, loading, errors = []) => {
  return { [code]: { ...state[code], loading, errors } };
};

export const createRequestTypes = (base) => {
  const requestTypes = [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
  requestTypes.toString = () => base;
  return requestTypes;
};
