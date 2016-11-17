const home = require('express').Router();

home.get('/', (req, res) => res.json(`get home`));

module.exports = home;
