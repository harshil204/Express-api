const asyncHandler = require("express-async-handler")
const Contact = require("../models/Contact")
const { request } = require("express")

// @desc Get all contactList
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async(req, res) => {
    const contacts  = await Contact.find();
    res.status(200).json({ message: "success", data: contacts})
})

// @desc Get acontact
// @route GET /api/contacts/id
// @access public
const getContact = asyncHandler(async(req, res) => {
    const data  = await Contact.findById(req.params.id);
    if(!data){
        res.status(404)
        throw new Error("No records found")
    }
    res.status(200).json({ message: 'success', data })
})

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler( async (req, res) => {
    const {
        name,
        email,
        phone,
        address
    } = req.body
    if (!name || !email || !phone || !address) {
        res.status(403)
        throw new Error("Please enter all required fields")
    }
    const data = await Contact.create({
        name, 
        email,
        phone,
        address
    })
    res.status(200).json({message: "Record has been created", data})
})

// @desc UPDATE contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async(req, res) => {
    const data  = await Contact.findById(req.params.id);
    if(!data){
        res.status(404)
        throw new Error("No records found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json({ message: `Record No. ${req.params.id} has been updated successfully` , data: updatedContact})
}
)

// @desc DELETE a contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async(req, res) => {
    const data  = await Contact.findById(req.params.id);
    if(!data){
        res.status(404)
        throw new Error("No records found")
    }
    const deletedContact = await Contact.findByIdAndRemove(req.params.id)
    res.status(200).json({ message: `Record No. ${req.params.id} has been deleted successfully`, data: deletedContact })
})

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}