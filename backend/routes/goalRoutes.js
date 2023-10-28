const express = require('express');
const router = express.Router();
const { getAllGoals, getGoal, createGoal, updateGoal, deleteGoal } = require('../controllers/goalController');

// router.get('/', getAllGoals)
// router.get('/:id', getGoal)
// router.post('/', createGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

// We can clean up the above implementation by grouping the routes like this
router.route('/').get(getAllGoals).post(createGoal);
router.route('/:id').get(getGoal).delete(deleteGoal).put(updateGoal);

module.exports = router