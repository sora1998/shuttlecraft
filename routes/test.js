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

router.get('/', async (req, res) => {
  console.log('test');
  res.status(200).render('test', {
    layout: 'public',
    containsEscapeSequences
  });
});
