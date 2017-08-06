import express from 'express';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }

  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if (validator.isEmpty(data.timezone)) {
    errors.timezone = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
router.post('/', (req, res) => {
  setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
      res.json(errors);
    }

  }, 5000);

});

export default router;