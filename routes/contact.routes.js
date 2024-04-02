// Contact routes here
import express from 'express'
const router = express.Router()
import contactController from '../controllers/contact.controller.js'
import contactModel from '../models/contact.model.js'

router.post('/create' , contactController.createContact)
router.get('/all' , contactController.getAllContact)
router.get('/:id' , contactController.getContact)
router.put('/update/:id' , contactController.updateContact)
router.delete('/delete/:id', contactController.deleteContact)
router.get('/email/:email' , contactController.getContactByEmail)
router.get('/phone/:phone' , contactController.getContactByNumber)

export default router