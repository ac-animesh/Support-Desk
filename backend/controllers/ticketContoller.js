const Ticket = require("../models/ticketSchema");
const User = require("../models/userSchema");

//route     post api/ticket/
//access    PRIVATE
//desc      register single ticket
const createTicket = async (req, res) => {
  const { product, description, issue } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }
    const ticket = new Ticket({
      user: req.user.id,
      product,
      description,
      issue,
    });

    await ticket.save();
    res.status(200).json({ message: "Ticket is successfully created" });
  } catch (error) {
    console.log(error);
  }
};

//route     Get api/tickets/:id
//access    PRIVATE
//desc      get a single ticket
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
  }
};

//route     Get api/tickets/
//access    PRIVATE
//desc      get tickets
const getTickets = async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
};

//route     Delete api/tickets/:id
//access    PRIVATE
//desc      delete a ticket
const deleteTicket = async (req, res) => {
  try {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    await ticket.remove();
    res.status(200).json({ message: "Ticket is Deleted" });
  } catch (error) {
    console.log(error);
  }
};

//route     PUT api/tickets/:id
//access    PRIVATE
//desc      update a ticket
const updateTicket = async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findByIdAndUpdate(req.params.id);

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  const updatedTticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({ message: "Ticket is Updated" });
};

module.exports = {
  createTicket,
  getTicket,
  getTickets,
  deleteTicket,
  updateTicket,
};
