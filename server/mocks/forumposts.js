module.exports = function(app) {
  var express = require('express');
  var forumpostsRouter = express.Router();
  forumpostsRouter.get('/', function(req, res) {
    res.send({
      'forumposts': [
        { 
          id: 1,
          title:'title1',
          content: 'somestuff1',
          author: 'author1'
        },
        { 
          id: 2,
          title:'title2',
          content: 'somestuff2',
          author: 'author2'
        },
        { 
          id: 3,
          title:'title3',
          content: 'somestuff3',
          author: 'author3'
        }
      ]
    });
  });

  forumpostsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  forumpostsRouter.get('/:id', function(req, res) {
    res.send({
      'forumposts': {
        id: req.params.id
      }
    });
  });

  forumpostsRouter.put('/:id', function(req, res) {
    res.send({
      'forumposts': {
        id: req.params.id
      }
    });
  });

  forumpostsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/forumposts', forumpostsRouter);
};
