const accountService = require('../services/account.service');

const getAccount = (req, res) => {
  try {
    const account = accountService.getAccount();
    res.send(account);
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
}

module.exports = {
  getAccount,
};
