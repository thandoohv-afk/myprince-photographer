import api from "../../../lib/api";
import ProtectedRoute from "../../../components/ProtectedRoute";

interface Booking {
  _id: string;
  clientName: string;
  email: string;
  phone: string;
  date: string;
  package: string;
  status: string;
}

async function fetchBookings(): Promise<Booking[]> {
  const res = await api.get("/bookings");
  return res.data;
}

export default async function AdminBookingsPage() {
  const bookings = await fetchBookings();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-4xl font-bold mb-10">
          Client Bookings
        </h1>

        <div className="space-y-4">

          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-zinc-900 p-6 rounded-2xl"
            >

              <h2 className="text-xl font-bold">
                {booking.clientName}
              </h2>

              <p>{booking.email}</p>

              <p>{booking.phone}</p>

              <p>{booking.date}</p>

              <p>{booking.package}</p>

              <p>
                Status: {booking.status}
              </p>

            </div>
          ))}

        </div>

      </main>
    </ProtectedRoute>
  );
}