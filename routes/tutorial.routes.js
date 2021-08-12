const express = require('express');
const router = express.Router();
const tutorialController = require('../controller/tutorial.controller');

router.post('/', tutorialController.create);
router.get('/', tutorialController.find);
router.put('/', tutorialController.update);
router.delete('/', tutorialController.delete);

module.exports = router;