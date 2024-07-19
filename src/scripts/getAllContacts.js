import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contactsArrJSON = await fs.readFile(PATH_DB, 'utf8');

    return JSON.parse(contactsArrJSON);
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
