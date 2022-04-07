import { getData, setData } from "../storage/helperStorage";

export const setLanguage = (value: string) => {

setData('lang', value);

};



export const getLanguage = async () => {

const language = await getData('lang');

const myLocale = language != null ? language : 'en';

return myLocale;

};