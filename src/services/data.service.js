const dataStorage = require('../data');

const getData = (type) => {
  const data = type !== 'balance'
    ? dataStorage.transactions
    : dataStorage.accountBalance
  return data;
}

const getDataById = (id) => {
  const transaction = dataStorage.transactions.find(transaction => transaction.id === id);
  return transaction;
}

const postData = (body, type) => {
  if (type === 'balance') {
    return dataStorage.accountBalance = body;
  } 
  dataStorage.transactions.push(body);
}

module.exports = {
  getData,
  postData,
  getDataById,
}