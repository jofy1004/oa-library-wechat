'use strict';

var env = require('../env');
var mongoose = require('mongoose');

exports.mongoose = mongoose.connect(env.MONGO);