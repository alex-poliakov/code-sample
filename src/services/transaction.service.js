const uniqid = require('uniqid');
const dataService = require('./data.service');

const getTransactions = () => {
  return dataService.getData();
};

const getTransactionById = (id) => {
  if (!id) throw { status: 422, message: 'invalid ID supplied' };
  const transaction = dataService.getDataById(id);
  if (!transaction) throw { status: 404, message: 'transaction not found' };
  return transaction;
};

const commitTransaction = (body) => {
  if ((body.type !== 'credit' && body.type !== 'debit') || !body.amount)
    throw { status: 422, message: 'invalid input' };

  const currentBalance = dataService.getData('balance');
  if (currentBalance < body.amount) return { message: 'Balance to low' };
  const data = Object.assign(body, {
    id: uniqid(),
    effectiveDate: new Date(),
  });
  dataService.postData(data);
  const newBalance = currentBalance - body.amount;
  dataService.postData(newBalance, 'balance');
  return data;
};

module.exports = {
  getTransactions,
  commitTransaction,
  getTransactionById,
};
