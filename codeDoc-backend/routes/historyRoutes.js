const express = require('express');
const router = express.Router();
const { saveHistory, getHistory } = require('../controllers/historyController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/saveHistory', authMiddleware, saveHistory);
router.get('/getHistory', authMiddleware, getHistory);

module.exports = router;
