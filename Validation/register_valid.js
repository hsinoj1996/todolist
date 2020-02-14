const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = function validateRegisterInput(r_data) {
  let errors = {};
  r_data.username = !isEmpty(r_data.username) ? r_data.username : "";
  r_data.email = !isEmpty(r_data.email) ? r_data.email : "";
  r_data.password = !isEmpty(r_data.password) ? r_data.password : "";
  r_data.password1 = !isEmpty(r_data.confirm_password)
    ? r_data.confirm_password
    : "";

  if (Validator.isEmpty(r_data.username)) {
    errors.username = "username is required";
  }
  if (Validator.isEmpty(r_data.email)) {
    errors.email = "email is required";
  }
  if (Validator.isEmpty(r_data.password)) {
    errors.password = "password is required";
  }
  if (!Validator.isLength(r_data.password, { min: 8, max: 30 })) {
    errors.password = "password must be at least 8 characters";
  }
  if (!Validator(r_data.password.uppercase)) {
    errors.uppercase = " at least one character must be upper case";
  }

  if (Validator.isEmpty(r_data.confirm_password)) {
    errors.confirm_password = "confirm password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
