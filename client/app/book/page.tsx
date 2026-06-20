"use client";

import { useState } from "react";
import axios from "axios";

export default function BookingPage() {
  const [form, setForm] = useState({
    clientName: "",
    email: "",
    phone: "",
    date: "",
    package: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/bookings",
        form
      );

  const whatsappMessage = `
Hello, I'd like to book a photography session.

Name: ${form.clientName}
Email: ${form.email}
Phone: ${form.phone}
Date: ${form.date}
Package: ${form.package}

Message:
${form.message}
`;

window.open(
  `https://wa.me/27798121272?text=${encodeURIComponent(
    whatsappMessage
  )}`,
  "_blank"
);    

      alert("Booking submitted!");

      setForm({
        clientName: "",
        email: "",
        phone: "",
        date: "",
        package: "",
        message: "",
      });

    } catch (error) {
      alert("Failed to submit booking");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Book a Session
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={form.clientName}
            onChange={(e) =>
              setForm({
                ...form,
                clientName: e.target.value,
              })
            }
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({
                ...form,
                date: e.target.value,
              })
            }
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <select
            value={form.package}
            onChange={(e) =>
              setForm({
                ...form,
                package: e.target.value,
              })
            }
            className="w-full p-4 bg-zinc-900 rounded"
          >
            <option value="">
              Select Package
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Graduation">
              Graduation
            </option>

            <option value="Corporate">
              Corporate
            </option>
          </select>

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <button
            className="bg-white text-black px-8 py-4 rounded-full font-bold"
          >
            Submit Booking
          </button>

        </form>

      </div>

    </main>
  );
}