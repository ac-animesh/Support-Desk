const express = require("express");
const router = express();
const noteRouter = require("./notesRoutes");
const {
  createTicket,
  getTicket,
  getTickets,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketContoller");
const { auth } = require("../middleware/authMiddleware");

//route     Get api/ticket
//access    PRIVATE
//desc      get a single ticket
router.get("/:id", auth, getTicket);

router.delete("/:id", auth, deleteTicket);

router.put("/:id", auth, updateTicket);

//route     post api/ticket
//access    PRIVATE
//desc      register single ticket
router.get("/", auth, getTickets);
router.post("/", auth, createTicket);

router.use("/:id/note", noteRouter);

module.exports = router;
