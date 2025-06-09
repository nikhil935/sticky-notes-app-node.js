const NOTES = require("../model/model");

async function getUser(req, res) {
  try {
    const notes = await NOTES.find({});
    return res.status(200).json(notes);
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "failed to fetch notes", error: err.message });
  }
}

async function getUserById(req, res) {
  try {
    const notes = await NOTES.findById(req.params.id);
    if (!notes) {
      return res.status(404).json({ msg: "Notes not found" });
    }
    return res.json(notes);
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "failed to fetch notes", error: err.message });
  }
}

async function createUser(req, res) {
  try {
    const body = req.body;
    if (!body.name || !body.content) {
      return res.status(400).json({ msg: "Please provide name and content" });
    }
    await NOTES.create({
      name: body.name,
      content: body.content,
    });
    return res.status(200).json({ msg: "Notes created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "failed to created notes ", error: err.message });
  }
}

async function updateUser(req, res) {
  const id = req.params.id;
  const updatedData = req.body;

  if (!updatedData) {
    return res.status(400).json({ msg: "Update data is required" });
  }

  try {
    const notes = await NOTES.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!notes) {
      return res.status(400).json({ msg: "Notes not found" });
    }

    return res.status(200).json({ msg: "Updated  successfully", data: notes });
  } catch (err) {
    return res.status(500).json({
      nsg: "Failed to update notes , server error",
      error: err.message,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const notes = await NOTES.findByIdAndDelete(req.params.id);
    if (!notes) {
      return res.status(400).json({ msg: "Notes not found" });
    }
    return res.status(201).json({ msg: "Deleted  successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "failed to delete notes", error: err.message });
  }
}

module.exports = { createUser, getUser, updateUser, getUserById, deleteUser };
