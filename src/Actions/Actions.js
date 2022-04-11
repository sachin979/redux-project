export function loggedIn(payload) {
  return {
    type: "LOGIN",
    payload,
  };
}
