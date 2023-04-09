export const getDateStringFromMs = (ms = undefined) => {
  return ms
    ? new Date(ms).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];
};

export const getTimeStringFromMs = (ms = undefined) => {
  return ms
    ? new Date(ms).toISOString().split('T')[1].split('.')[0]
    : new Date().toISOString().split('T')[1].split('.')[0];
};
