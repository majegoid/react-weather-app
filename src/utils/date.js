export const getDateStringFromMs = (ms = undefined) => {
  const date = ms ? new Date(ms) : new Date();
  return date.toDateString();
};

export const getTimeStringFromMs = (ms = undefined) => {
  const date = ms ? new Date(ms) : new Date();
  return date.toTimeString();
};
