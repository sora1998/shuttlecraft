import express from 'express';

export const router = express.Router();

const containsEscapeSequences = str => {
  console.log('containsEscapeSequences');
  const escapeSequences = ['\\n', '\\r', '\\t', '\\b', '\\f', '\\v', '\\0', "\\'", '\\"', '\\\\'];
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(str);
  const hasLowerCase = /[a-z]/.test(str);
  const hasNumber = /[0-9]/.test(str);
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);

  if (str.length < minLength) {
    return false;
  }

  for (const escapeSeq of escapeSequences) {
    if (str.includes(escapeSeq)) {
      return false;
    }
  }

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

router.post('/', (req, res) => {
  console.log('req.body', req.body);
  // const inputValue = req.body.input; // Get the input value from the request body

  containsEscapeSequences('5'); // Validate the input value

  // if (errorMessage !== '') {
  //   res.status(400).send({ error: errorMessage }); // Send error response with validation message
  // } else {
  //   res.send({ message: 'Input is valid' }); // Send success response with confirmation message
  // }
});

router.get('/', async (req, res) => {
  console.log('test');
  res.status(200).render('test', {
    layout: 'public'
    // containsEscapeSequences
  });
});
