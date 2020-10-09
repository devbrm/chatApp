const validInput = (data, maxLength = 0) => {
  if (data.length === 0) return true;
  if (data.trim().length) {
    if (maxLength) return data.length <= maxLength;
    else return data.trim().length;
  }
};

export default validInput;
