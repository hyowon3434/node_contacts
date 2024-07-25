const express = require('express')
const router = express.Router()
const {getAllContacts, createContact, getContact, updateContact, deleteContact} = require('../controllers/contactController')

// 연락처 가져오기
router
    .route('/')
    .get(getAllContacts)
    .post(createContact)


router
    .route('/:id')
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact)

    module.exports = router