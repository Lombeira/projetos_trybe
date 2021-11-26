import { useState } from 'react';

export default function useCopyRecipeLinkToClipboard(parentPath, recipeID) {
  const [shouldShowCopiedMessage, setShouldShowCopiedMessage] = useState(false);
  let urlType;

  switch (parentPath) {
  case 'meals':
    urlType = 'comidas';
    break;
  case 'drinks':
    urlType = 'bebidas';
    break;
  default:
  }

  const textToCopy = `http://localhost:3000/${urlType}/${recipeID}`;

  const copyRecipeLinkToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(textToCopy);
      setShouldShowCopiedMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return { shouldShowCopiedMessage, copyRecipeLinkToClipboard };
}
