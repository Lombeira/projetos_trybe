import IResValidate from '../interfaces/IResValidate';

export const responseValidate = (
  status = 422,
  message = '',
  data = {},
): IResValidate => {
  const statusCode = message.includes('is required') ? 400 : status;
  return {
    status: statusCode,
    message,
    data,
  };
};

export const capitalizeString = (string: string) => {
  const removeQuotes = string.replace(/"/g, '');
  return removeQuotes.charAt(0).toUpperCase() + removeQuotes.slice(1);
};
