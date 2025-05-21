const express = require('express');
const router = express.Router();
const Category = require('../model/category');
const mongoose = require('mongoose')
const checkAuth=require('../middleware/checkAuth')
//add  new category
router.post('/', (req, res) => {
    console.log(req.body);
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    })
    category.save()
        .then(result => {
            res.status(201).json({
                new_data: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })

})

router.get('/', (req, res) => {
    Category.find()
        .then(results => {
            res.status(200).json({
                category: results
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})
//delete
router.delete('/:id',checkAuth,(req,res)=>{
    console.log(req.params.id);
    Category.findByIdAndRemove(req.params.id)
    .then(result=>{
        res.status(200).json({
            msg:result 
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports = router;