"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/ProtectedRoute";


export default function AdminDashboard() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return ( 
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-10">

        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/admin/photos"
            className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Photos
            </h2>

            <p className="text-gray-400">
              Upload and manage portfolio photos
            </p>
          </Link>

          <Link
            href="/admin/bookings"
            className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Bookings
            </h2>

            <p className="text-gray-400">
              View and manage client bookings
            </p>
          </Link>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-3">
              Analytics
            </h2>

            <p className="text-gray-400">
              Coming soon
            </p>
          </div>

        </div>

      </main>
    </ProtectedRoute>
  );
}