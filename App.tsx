import React, {useCallback, useEffect, useState} from 'react';
import MainContainer from './src/navigation/MainContainer';
import {setLocale} from './src/utilites/Locale';
import {getLanguage} from './src/utilites/Locale/localHelper';
const App = () => {
  (async () => {
    const _language = await getLanguage();
    setLocale(_language);
  })();

  return <MainContainer />;
};

export default App;
