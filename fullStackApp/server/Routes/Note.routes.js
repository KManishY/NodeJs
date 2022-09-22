const { Router } = require("express");
const bcrypt = require("bcrypt");
const { NoteModel } = require("../Models/Note.model.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const noteController = Router();

noteController.get("/", async (req, res) => {
	const notes = await NoteModel.find({ userEmail: req.body.userEmail });
	res.send(notes);
});
noteController.post("/create", async (req, res) => {
	const { Heading, Note, Tag, userEmail } = req.body;

	const note = new NoteModel({
		Heading,
		Note,
		Tag,
		userEmail,
	});
	try {
		await note.save();
		res.send("created");
	} catch (error) {
		res.send(error);
		// res.status(500).json(error);
	}
});
noteController.delete("/delete/:id", async (req, res) => {
	const { userEmail } = req.body;
	console.log("userEmail: ", userEmail);
	const { id } = req.params;
	const deleteNote = await NoteModel.findOne({
		id,
	});
	console.log("deleteNote: ", deleteNote);
	res.send(deleteNote);
});
noteController.patch("/edit/:noteId", async (req, res) => {
	const { noteId } = req.params;
	const deletedNote = await NoteModel.findOneAndUpdate(
		{ _id: noteId, userId: req.body.userId },
		req.body
	);
	if (deletedNote) {
		res.send("Deleted");
	} else {
		res.send("couldn't delete");
	}
});

// noteController.post("/", async (req, res) => {});

module.exports = { noteController };
