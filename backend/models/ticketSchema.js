const mongoose = require("mongoose");
const { Schema } = mongoose;

const TicketSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: ["iPhone", "iPad", "MacBook Air", "MacBook Pro"],
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("ticket", TicketSchema);

module.exports = Ticket;
