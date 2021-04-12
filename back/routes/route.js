
const express = require('express');
const router = express.Router();
const Data = require('../models/model')

router.route('/post').post((req,res) => {
    const newData = {
        title: req.body.title,
        description: req.body.description
    };

    const newDataPost = new Data(newData);

    newDataPost.save((error) => {
        if(error){
            res.status(500).json({msg:'Sorry,internal server errors'});
        }else{
            res.status(200).json({msg:'Data has been saved'});
        }
    });
});

module.exports = router;