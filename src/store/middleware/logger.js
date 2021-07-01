import { createLogger } from 'redux-logger';

const BLACKLIST = [
  // TODO
];

const logger = createLogger({
  collapsed: true,
  duration: true,
  predicate: (getState, action) => !BLACKLIST.includes(action.type)
});

export default logger;
