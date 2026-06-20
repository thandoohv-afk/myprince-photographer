"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import api from "../../../lib/api";
import ProtectedRoute from "../../../components/ProtectedRoute";

interface Photo {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  description?: string;
}

export default function AdminPhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [editingPhoto, setEditingPhoto] =
    useState<Photo | null>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");

  const fetchPhotos = async () => {
    try {
      const response = await api.get("/photos");
      setPhotos(response.data);
    } catch (error) {
      console.error("Failed to load photos", error);
    }
  };

  const deletePhoto = async (id: string) => {
    const confirmDelete = window.confirm("Delete this photo?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/photos/${id}`);
      void fetchPhotos();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePhoto = async () => {
    if (!editingPhoto) return;

    if (!title.trim() || !category.trim()) {
      setFormError("Title and category are required.");
      return;
    }

    try {
      await api.put(`/photos/${editingPhoto._id}`, {
        title,
        category,
        description,
      });

      setEditingPhoto(null);
      setFormError("");
      void fetchPhotos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await api.get("/photos");
        setPhotos(response.data);
      } catch (error) {
        console.error("Failed to load photos", error);
      }
    };

    void loadPhotos();
  }, []);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-4xl font-bold mb-10">
          Manage Photos
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {photos.map((photo) => (
            <div
              key={photo._id}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-4">

                <h2 className="font-semibold">
                  {photo.title}
                </h2>

                <p className="text-gray-400">
                  {photo.category}
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingPhoto(photo);
                      setTitle(photo.title);
                      setCategory(photo.category);
                      setDescription(photo.description || "");
                      setFormError("");
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded shadow"
                  >
                    Edit Photo
                  </button>

                  <button
                    type="button"
                    onClick={() => void deletePhoto(photo._id)}
                    className="bg-red-600 px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {editingPhoto && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-zinc-900 p-8 rounded-2xl w-[500px]">
              <h2 className="text-2xl font-bold mb-6">Edit Photo</h2>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 bg-zinc-800 rounded mb-4"
                placeholder="Title"
              />

              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-zinc-800 rounded mb-4"
                placeholder="Category"
              />

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-zinc-800 rounded mb-4"
                placeholder="Description"
              />

              {formError && (
                <p className="text-sm text-red-400 mb-4">{formError}</p>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={updatePhoto}
                  disabled={!title.trim() || !category.trim()}
                  className={`px-4 py-2 rounded text-white ${
                    title.trim() && category.trim()
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-green-900 cursor-not-allowed"
                  }`}
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => setEditingPhoto(null)}
                  className="bg-gray-600 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </ProtectedRoute>
  );
}