export const useGetUser = () => {
  let user = localStorage.getItem('user');
  if (user === '"Authentication successful."') {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
};
