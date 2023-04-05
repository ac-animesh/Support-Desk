const Ticket = require("../models/ticketSchema");
const User = require("../models/userSchema");
const Note = require("../models/noteModel");

const getNote = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }

    console.log(user);

    const ticket = await Ticket.findById(req.params.id);
    console.log(ticket);
    if (!ticket) {
      return res.status(401).json({ message: "Ticket not Found" });
    }
    const note = await Note.find({ ticket: req.params.id });
    console.log(note);
    if (!note) {
      return res.status(401).json({ message: "note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.log(error);
  }
};

// access   Private
//route     GET /api/tickets/note
//desc      create a note
const createNote = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }

    const ticket = await Ticket.findById(req.params.id);
    console.log(ticket);
    if (!ticket) {
      return res.status(401).json({ message: "Ticket not Found" });
    }

    const newText = await Note.create({
      text: req.body.text,
      user: req.user.id,
      ticket: req.params.id,
    });

    res.status(200).json(newText);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNote,
  getNote,
};
