export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};
