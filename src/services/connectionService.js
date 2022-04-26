import { openDatabase, enablePromise } from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase(
    {
      name: 'ikun_dictionary.db',
      createFromLocation: 1
    },
    () => {},
    error => { throw Error(error.message); }
  );
};

const searchQuery = (search) => {
  return `SELECT * FROM words ` +
         `WHERE REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ikun,"ń","n"),"ʉ","u"),"Ʉ","U"),"ɉ", "j"),"Ɉ","J"),"Ń","N") LIKE "%` + search + `%" OR ` +
         `REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(meaning_spa,"ń","n"),"ʉ","u"),"Ʉ","U"),"ɉ", "j"),"Ɉ","J"),"Ń","N") LIKE "%` + search + `%" OR ` +
         `REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(examples_ikun,"ń","n"),"ʉ","u"),"Ʉ","U"),"ɉ", "j"),"Ɉ","J"),"Ń","N") LIKE "%` + search + `%" OR ` +
         `REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(examples_spa,"ń","n"),"ʉ","u"),"Ʉ","U"),"ɉ", "j"),"Ɉ","J"),"Ń","N") LIKE "%` + search + `%";`
};

export const getWordItems = async (db, search) => {
  try {
    const words = [];
    const results = await db.executeSql(searchQuery(search));
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        words.push(result.rows.item(index))
      }
    });
    return words;
  } catch (error) {
    throw Error(error.message);
  }
};
