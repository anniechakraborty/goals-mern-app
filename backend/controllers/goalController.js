const asyncHandler = require('express-async-handler')

// @desc    : This function gets all the goals
// @route   : GET /api/goals 
// @access  : Private
const getAllGoals = asyncHandler(async (req, res)=>{
    res.status(200).json({message : "Get goals!"});
})

// @desc    : This function gets a specific goal
// @route   : GET /api/goals/:id 
// @access  : Private
const getGoal = asyncHandler(async (req, res)=>{
    res.status(200).json({message : `Get goal ${req.params.id}`});
})

// @desc    : This function creates a goal
// @route   : POST /api/goals 
// @access  : Private
const createGoal = asyncHandler(async (req, res)=>{
    console.log("Body :", req.body);
    if(!req.body.text){
        // // status 400 is a bad request, i.e. when there is a client error and params aren't sent correctly or are missing
        // res.status(400).json({message : 'Bad request! Please send a Text Field value.'});

        // Doing the above using Express Error Handler
        res.status(400)
        throw new Error('Bad request! Please send a Text Field value!');
    }
    res.status(200).json({message : "Created goal!"});
})

// @desc    : This function updates a goal
// @route   : PUT /api/goals/:id 
// @access  : Private
const updateGoal =asyncHandler(async (req, res)=>{
    res.status(200).json({message : `Updated goal ${req.params.id}`});
})

// @desc    : This function deletes a goal
// @route   : DELETE /api/goals/:id 
// @access  : Private
const deleteGoal = asyncHandler(async (req, res)=>{
    res.status(200).json({message : `Deleted goal ${req.params.id}`});
})

module.exports = {
    getAllGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
}