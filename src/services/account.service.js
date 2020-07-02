const dataService = require('./data.service');

const getAccount = () => {
  const balance = dataService.getData('balance');
  return { balance };
};

module.exports = {
  getAccount
};
