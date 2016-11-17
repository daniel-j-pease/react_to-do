const tasks = require('express').Router();
const db = require('../models/task');

// position routes in order of descending specificity
const sendJSONresp = (req, res, next) => res.json(res.rows);

tasks.route('/:tasksID')
  // .get(db.getTasks, (req, res) => res.json(res.rows))
  .put((req, res) => res.json(`put tasks/${req.params.taskID}`))
  .delete((req, res) => res.json(`delete tasks/${req.params.taskID}`));

tasks.route('/')
  .get(db.getTasks, sendJSONresp)
  .post(db.addTask, sendJSONresp);

module.exports = tasks;
