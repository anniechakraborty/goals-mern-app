const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const { default: mongoose } = require('mongoose');

// @desc    : This function gets all the goals
// @route   : GET /api/goals 
// @access  : Private
const getAllGoals = asyncHandler(async (req, res)=>{
    const goals  = await Goal.find(); // the find() fetches all the records from the database using the mongoose model Goal
    res.status(200).json({message : "Get goals!", goals: goals});
})

// @desc    : This function gets a specific goal
// @route   : GET /api/goals/:id 
// @access  : Private
const getGoal = asyncHandler(async (req, res)=>{
    const goalID = req.params.id;
    const goal = await Goal.findById(goalID);
    if(!goal) {
        res.status(400);
        throw new Error(`Goal ${goalID} not found!`)
    }
    res.status(200).json({message : `Get goal no. ${goalID}`, goal: goal});
})

// @desc    : This function creates a goal
// @route   : POST /api/goals 
// @access  : Private
const createGoal = asyncHandler(async (req, res)=>{
    console.log("Body :", req.body);
    if(!req.body.goalTitle){
        // // status 400 is a bad request, i.e. when there is a client error and params aren't sent correctly or are missing
        // res.status(400).json({message : 'Bad request! Please send a Text Field value.'});

        // Doing the above using Express Error Handler
        res.status(400)
        throw new Error('Bad request! Please enter a title!');
    }
    const goal = await Goal.create({
        goalTitle : req.body.goalTitle,
        goalDescription : req.body.goalDescription,
        goalCompletion : req.body.goalCompletion
    });

    res.status(200).json({message : "Created goal!", goalCreated : goal});
})

// @desc    : This function updates a goal
// @route   : PUT /api/goals/:id 
// @access  : Private
const updateGoal =asyncHandler(async (req, res)=>{
    const goalID = req.params.id;
    const goal = await Goal.findById(goalID);
    if(!goal) {
        res.status(400);
        throw new Error(`Goal ${goalID} not found!`)
    }

    const updatedGoal = await Goal.findByIdAndUpdate(goalID, req.body, {new : true}); // {new : true} creates a new field if it doesn't exist exist

    res.status(200).json({message : `Updated goal ${goalID}`, goal : updatedGoal});
})

// @desc    : This function deletes a goal
// @route   : DELETE /api/goals/:id 
// @access  : Private
const deleteGoal = asyncHandler(async (req, res)=>{
    const goalID = req.params.id;
    const goal = await Goal.findById(goalID);
    if(!goal) {
        res.status(400);
        throw new Error(`Goal ${goalID} not found!`)
    }
    const deleteTheGoal  = await Goal.deleteOne({_id : goalID});
    res.status(200).json({message : `Deleted goal ${goalID}`, goal : deleteTheGoal, id : goalID});
})

module.exports = {
    getAllGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
}