const express = require('express');
const router = express.Router();
var models = require('../models/models');
var User = models.User;

router.get('/', function(req, res, next) {
    res.render('form', {
        // pages: pagesInstance
    });

});

router.post('/', function(req, res, next) {

    User.findOrCreate({
        where:{
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone
        }
    })
        // .spread(function(user, wasCreatedBoolean){
        //     return Page.create({
        //         title: req.body.title,
        //         content: req.body.content,
        //         status: req.body.status
        //     }).then(function(createdPage){
        //         return createdPage.setAuthor(user);
        //     });
        // })
        // .then(function(createdPage){
            res.redirect('/');
        // })
        // .catch(next);

});

module.exports = router;

