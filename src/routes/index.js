const express = require('express');
const path = require('path');
const { clientDir } = require('../config');
const { accountController, transactionController } = require('../controllers');
const router = express.Router();

router.get('/', (req, res) => res.sendFile(path.join(clientDir, '/index.html')));

router.get('/transaction', transactionController.getTransactions);
router.post('/transaction', transactionController.commitTranaction);
router.get('/transaction/:transactionId', transactionController.getTransactionById);
router.get('/account', accountController.getAccount);

module.exports = router;