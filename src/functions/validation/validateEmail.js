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
