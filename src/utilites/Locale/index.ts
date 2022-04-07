
import I18n from 'react-native-i18n';

import en from './en';

import de from './de';




I18n.fallbacks = true;

I18n.translations = {en, de};



export function setLocale(locale: string) {
I18n.locale = locale;
}



export function getLocaleValue(key: string) {

return I18n.t(key);

}



export const setLanguage = (value: string) => {

};



export const getLanguage = async () => {


};