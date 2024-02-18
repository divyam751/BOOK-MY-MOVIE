const { Router } = require("express");
const { SeatsModel } = require("../models/seats.model");
const seatsRouter = Router();

seatsRouter.get("/", async (req, res) => {
  const seats = await SeatsModel.find();
  res.status(200).send(seats);
});
seatsRouter.get("/:seatsId", async (req, res) => {
  const seatsId = req.params.seatsId;
  try {
    const seats = await SeatsModel.findOne({ id: seatsId });
    if (!seats) {
      return res.status(404).json({ message: "Seats not found" });
    }
    res.status(200).json(seats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

seatsRouter.post("/create", async (req, res) => {
  const { id, booked, rowName, selected } = req.body;
  const new_seats = new SeatsModel({
    id,
    booked,
    rowName,
    selected,
  });
  await new_seats.save();
  res.status(200).send("New seats added");
});

seatsRouter.put("/edit/:seatsId", async (req, res) => {
  const seatsId = req.params.seatsId;
  const payload = req.body;

  try {
    const updatedseats = await SeatsModel.findByIdAndUpdate(
      { _id: seatsId },
      payload
    );

    if (!updatedseats) {
      return res.status(404).send({ msg: `seats ${seatsId} not found` });
    }

    res.status(200).send({ msg: `seats ${seatsId} updated` });
  } catch (error) {
    console.error("Error updating seats:", error);
    res.status(500).send({ msg: "An error occurred while updating the seats" });
  }
});

seatsRouter.delete("/delete/:seatsId", async (req, res) => {
  const seatsId = req.params.seatsId;

  try {
    const deletedseats = await SeatsModel.findByIdAndDelete(seatsId);

    if (!deletedseats) {
      return res.status(404).send({ msg: `seats ${seatsId} not found` });
    }

    res.status(200).send({
      msg: `seats ${seatsId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting seats:", error);
    res.status(500).send({ msg: "An error occurred while deleting the seats" });
  }
});

module.exports = { seatsRouter };
