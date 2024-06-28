// routes/userRoutes.js
const express = require('express');
const User = require('../model/model');
const Anantmodel = require('../model/model');
const router = express.Router();


// GET route for the home page

router.get('/', (req, res) => {
    res.render('index1', { message: "jaldi bhar de", error: null });
});

// POST route for adding a user
router.post('/user', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.names,
            email: req.body.emails,
            mobile: req.body.mobile,
            age: req.body.age,
        });
        await newUser.save();
        res.render('index1', { message: 'User data saved successfully!' });
    } catch (err) {
        console.error('Error saving user data:', err);
        res.status(500).render('index1', { error: 'Error saving user data' });
    }
});


router.put('/putdata/:id', async(req, res) => {
   try{
    const id = req.params.id;
    const userExist = await Anantmodel.findById(id);
    if(!userExist){
        return res.status(404).json({msg:"user not found"});
    }
    const updatedData = await Anantmodel.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updatedData);
    }
    catch(error){
        res.status(500).json({error:"kuch dikat aa gyi hh"});
    }

   } 
);

router.delete('/delete/:id', async(req, res) => {
    try{
     const id = req.params.id;
     const userExist = await Anantmodel.findById(id);
     if(!userExist){
         return res.status(404).json({msg:"user not found"});
     }
     const deleteData = await Anantmodel.findByIdAndDelete(id,req.body,{new:true});
     res.status(200).json(deleteData, );
     }
     catch(error){
         res.status(500).json({error:"kuch dikat aa gyi hh"});
     }
 
    } 
 );

module.exports = router;