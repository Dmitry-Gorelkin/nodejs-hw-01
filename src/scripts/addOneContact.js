import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const contactsArrJSON = await fs.readFile(PATH_DB, 'utf8');

    const contactsArr = JSON.parse(contactsArrJSON);
    contactsArr.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contactsArr), 'utf8');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
