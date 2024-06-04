import users from '../data/users.json';

interface IData {
  [key: string]: {
    email: string;
    password: string;
  };
}

export const checkDataCorrect = (email: string, password: string) => {
  const data: IData = JSON.parse(JSON.stringify(users));
  let isDataCorrect = false;

  Object.keys(data).forEach(key => {
    const user = data[key];
    if (user.email === email && user.password === password) {
      isDataCorrect = true;
      return;
    }
  });

  return isDataCorrect;
};
