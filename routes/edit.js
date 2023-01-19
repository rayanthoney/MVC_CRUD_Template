//*Handles initial GET request for the homepage
//*Handles POST method  request for adding a new item


const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) // read = "get request the edit page with the item id that we want to edit"
router.get('/remove/:id', editController.deleteItem) // deletay's the item
router.post('/update/:id', editController.updateItem) // updates the item using data passed in from the form

module.exports = router