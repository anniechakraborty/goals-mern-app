// @desc    : This function gets all the goals
// @route   : GET /api/goals 
// @access  : Private
const getAllGoals = (req, res)=>{
    res.status(200).json({message : "Get goals!"});
}

// @desc    : This function gets a specific goal
// @route   : GET /api/goals/:id 
// @access  : Private
const getGoal = (req, res)=>{
    res.status(200).json({message : `Get goal ${req.params.id}`});
}

// @desc    : This function creates a goal
// @route   : POST /api/goals 
// @access  : Private
const createGoal = (req, res)=>{
    res.status(200).json({message : "Created goal!"});
}

// @desc    : This function updates a goal
// @route   : PUT /api/goals/:id 
// @access  : Private
const updateGoal =(req, res)=>{
    res.status(200).json({message : `Updated goal ${req.params.id}`});
}

// @desc    : This function deletes a goal
// @route   : DELETE /api/goals/:id 
// @access  : Private
const deleteGoal = (req, res)=>{
    res.status(200).json({message : `Deleted goal ${req.params.id}`});
}

module.exports = {
    getAllGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
}