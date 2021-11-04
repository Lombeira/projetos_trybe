/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const doTranslation = async (input, languageCode, cancelToken) => {
  try {
    const { data } = await axios.post(
      'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA',
      {
        q: input,
        target: languageCode,
      },
      { cancelToken: cancelToken.token },
    );

    return data.data.translations[0].translatedText;
  } catch (err) {
    return '';
  }
};

// eslint-disable-next-line react/prop-types
export default ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) { console.log(err); }
    };
  }, [text, language]);

  console.log(translated);
  return (
    <div>
      <h3 className="title">{translated}</h3>
    </div>
  );
};
