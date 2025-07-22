import api from "@/lib/axios";
import { formData } from "@/lib/utils";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      toast.error("Error while deleting note");
    }
  };
  return (
    <Link
      href={`/note/${note._id}`}
      className="card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span>{formData(new Date(note.createdAt))}</span>
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost text-sm text-white">
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="btn btn-ghost text-sm text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
