import express from 'express';
import { promises as fsPromises } from 'fs';

export const router = express.Router();

router.post('/', (req, res) => {
  console.log('req.body', req.body);

  // Your data to write to the .env file
  const envData = `
  USERNAME=${req.body.username}
  PASS=${req.body.password}
  DOMAIN=${req.body.domain}
  `;

  // Path to your .env file
  const envFilePath = './.env';

  // Use fsPromises.writeFile for asynchronous file writing
  fsPromises
    .writeFile(envFilePath, envData)
    .then(() => {
      console.log('Data has been written to .env file');
      return fsPromises.readFile(envFilePath, 'utf-8');
    })
    .then(fileContents => {
      console.log('Contents of .env file:');
      console.log(fileContents);
    })
    .catch(error => {
      console.error('Error writing to .env file:', error);
    });
});

router.get('/', async (req, res) => {
  console.log('test');
  res.status(200).render('test', {
    layout: 'public'
    // containsEscapeSequences
  });
});
