const express = require("express");
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all user contacts
// @access  Public
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   Post api/contacts
// @desc    Add new contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   Put api/contacts
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contacts");
});

// @route   Delete api/contacts;
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});
module.exports = router;
