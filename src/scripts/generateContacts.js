import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contactsArrJSON = await fs.readFile(PATH_DB, 'utf8');

    const contactsArr = JSON.parse(contactsArrJSON);

    for (let i = 0; i < number; i++) {
      contactsArr.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contactsArr), 'utf8');
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
