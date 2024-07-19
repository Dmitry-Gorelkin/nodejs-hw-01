import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contactsArrJSON = await fs.readFile(PATH_DB, 'utf8');

    const contactsArr = JSON.parse(contactsArrJSON);

    return contactsArr.length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
