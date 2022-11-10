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
