const express = require('express')
const router = express.Router()

const Generic = require('../models/generic')//from generic.js
const Other = require('../models/other')//from other.js



//INDEX ROUTE------------------------------------------------------------------------

router.get('/', (req, res) =>{
    res.send('Hello')///for testing purposes - remove when seeded
//Use mongo to find all 'Generic' in our database - from ../models/generic.js aka User
    Generic.find()
        .then((generics) => {
            //Once 'generics' have been found, then send JSON object to Client
            res.send(generics)
        })
})
//SHOW ROUTE------------------------------------------------------------------------
router.get('/:id', (req, res) => {
    res.send('Sup')///for testing purposes -remove when seeded
    //Find the _id of the user we want to return (in our router params)
    const genericId = req.params.id
    //Use the _id to search for a specific User in our DB
    Generic.findById(genericId)
    .then((generic)=> {
        res.send(generic)
    })
    //Once that user is found, send the object with user data to our

})



























module.exports =router