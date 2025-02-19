var mongoose = require('mongoose');

var cSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  post:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

mongoose.model('Comment', cSchema);