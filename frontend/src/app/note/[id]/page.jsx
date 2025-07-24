"use client";
import api from "@/lib/axios";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [id]);

  const handleSave = async () => {
    if (!note.title.trim() || !note.description.trim()) {
      toast.error("Please add a title or description");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully")
      router.push("/")
    } catch (error) {
      toast.error("Error saving the note");
    } finally{
      setSaving(false)
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note Deleted");
      router.push("/");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" /> Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="size-5" /> Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="flex flex-col mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input !outline-none w-full mt-2"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea !outline-none w-full mt-2 h-32 resize-none"
                  value={note.description}
                  onChange={(e) =>
                    setNote({ ...note, description: e.target.value })
                  }
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
