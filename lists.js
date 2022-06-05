const router=require('express').Router();
const List = require('./List');

router.post('/',async(req,res)=>{
    console.log(req.body)
    const newList=new List(req.body);
    try {
        const savedList =await newList.save();
        res.status(200).json(savedList);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;