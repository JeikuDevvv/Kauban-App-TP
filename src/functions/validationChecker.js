/* eslint-disable no-useless-escape */
export function checkStringContent(userCredential) {
  let invalidCounter = 5;

  userCredential.forEach((credentials) => {
    if (credentials === '') invalidCounter -= 1;
  });

  if (invalidCounter === 5) return true;
  else return false;
}

export function validateEmail(email) {
  if (email === '') {
    return true;
  }
  const VALID_EMAIL = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  if (email.search(VALID_EMAIL) === 0) {
    return true;
  } else {
    return false;
  }
}

export function validatePassword(password) {
  if (password === '') {
    return true;
  }

  const VALID_PASSWORD = new RegExp(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\(\)]){8,16}/
  );

  if (password.search(VALID_PASSWORD) === 0) {
    return true;
  } else {
    return false;
  }
}

export function validateConfirmPassword(password, confirmPassword) {
  if (confirmPassword === '') {
    return true;
  }

  if (password === confirmPassword) {
    return true;
  } else {
    return false;
  }
}
