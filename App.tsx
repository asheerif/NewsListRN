import React from 'react';
import MainContainer from './src/navigation/MainContainer';
import {setLocale, getLocaleValue} from './src/utilites/Locale';
setLocale('de');
const App = () => {
  return <MainContainer />;
};

export default App;
