import Note from "../models/Note.js";

export async function getPost(_, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // To show new note first I used -1
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function getPostById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function postPost(req, res) {
  try {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });

    await newNote.save();
    res.status(201).json({ message: "New note created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function putPost(req, res) {
  try {
    const { title, description } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function deletePost(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}
