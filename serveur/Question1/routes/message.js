const express = require('express');
const messageController = require('../controller/messageControllers');
const auth = require('../middleware/auth');
const router = express.Router();

router
.post('/message', auth, messageController.message)
.get('/messages', messageController.Allmessage)
.get('/message/:id', auth, messageController.singleMessage);
module.exports = router;