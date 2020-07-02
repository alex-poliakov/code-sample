const transactionService = require('../services/transaction.service');

const getTransactions = (req, res) => {
  try {    
    const transactions = transactionService.getTransactions();
    res.send(transactions);
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
};

const commitTranaction = (req, res) => {
  try {
    const transaction = transactionService.commitTransaction(req.body);
    res.send(transaction);
  } catch (e) {
    res.status(e.status).send(e.message);
  }
};

const getTransactionById = (req, res) => {
  try {
    const transaction = transactionService.getTransactionById(req.params.transactionId);
    res.send(transaction);
  } catch (e) {
    res.status(e.status).send(e.message);
  }
};

module.exports = {
  getTransactions,
  commitTranaction,
  getTransactionById,
};
