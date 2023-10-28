const express = require('express');
const router = express.Router();
const { getAllGoals, getGoal, createGoal, updateGoal, deleteGoal } = require('../controllers/goalController');


router.get('/', getAllGoals)

router.get('/:id', getGoal)

router.post('/', createGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router