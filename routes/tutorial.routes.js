const express = require('express');
const router = express.Router();
const tutorialController = require('../controller/tutorial.controller');

router.post('/', tutorialController.create);
router.get('/', tutorialController.findAll);
router.get('/tutorial/:id', tutorialController.find);
// router.get('/:id', tutorialController.findByDate);
// router.put('/', tutorialController.update);

module.exports = router;