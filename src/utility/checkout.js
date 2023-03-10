const isPostCodeValid = (postCode) => {
  const str = postCode.trim().replace(/\s/g, '').toUpperCase();

  const validCodes = ['DH80', 'DH85', 'DH86', 'DH87', 'DH88'];

  return validCodes.includes(str.substring(0, 4));
};

export default isPostCodeValid;
