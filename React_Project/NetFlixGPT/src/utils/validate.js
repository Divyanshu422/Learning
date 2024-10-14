/*
 * To test the email and password -> we will use the regex pattern.
 * The regex pattern has the test() method which takes the input/parameter -> which we want to test
 * & returns the true or false value
 */

//! Creating the named function which checks the email and password of login form

export const isDataValid = (name = "Divyanshu", email, password) => {
  // Regex pattern for name validation
  const isNameValid = /^([a-zA-Z0-9_\s]+)/.test(name);
  if (!isNameValid) return "Name is not a valid";

  // Regex pattern for validating email
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // If email is not valid then return => Email Failed
  if (!isEmailValid) return "Email is not a valid";

  // Regex pattern for validating password
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // If Password is not valid then return => Password Failed
  if (!isPasswordValid) return "Password Failed";

  // If both email and password are valid then return => null [ Here null means no error]
  return null;
};
