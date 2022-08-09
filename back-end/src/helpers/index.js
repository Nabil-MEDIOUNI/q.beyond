exports.getArgumentInput = (inputName) =>
  JSON.parse(JSON.stringify(inputName, null, 2));

exports.capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
