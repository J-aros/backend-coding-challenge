const formatDate = (date) => {
  const [day, month, year] = date.split("-");
  return [day, month, year].join("-");
};

module.exports = formatDate;