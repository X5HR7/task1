export const getDataFromLocalStorage = () => {
  return [Number(localStorage.getItem('success')), Number(localStorage.getItem('failure'))];
};

export const addSuccessAuth = () => {
  const currentValue: number = Number(localStorage.getItem('success'));
  localStorage.setItem('success', (currentValue + 1).toString());
  return currentValue + 1;
};

export const addFailureAuth = () => {
  const currentValue: number = Number(localStorage.getItem('failure'));
  localStorage.setItem('failure', (currentValue + 1).toString());
  return currentValue + 1;
};
