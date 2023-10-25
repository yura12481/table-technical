export const isValidUsername = {
  required: 'Username is required!',
  validate: (value: string) => {
    if (value.match(/^[a-zA-Z]{4,}$/)) {
      return true;
    }
    return 'Username must contain at least 4 English letters.';
  },
};

export const isValidPassword = {
  required: 'Password is required!',
  validate: (value: string) => {
    if (value.match(/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
      return true;
    }
    return 'Password must contain at least 6 English letters and at least 1 digit.';
  },
};
