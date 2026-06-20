import api from "../../lib/api";

interface Photo {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
}

async function fetchPhotos(): Promise<Photo[]> {
    try {
      const response = await api.get("/photos");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

export default async function PortfolioPage() {
  const photos = await fetchPhotos();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-5xl font-bold text-center mb-16">
        Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {photos.map((photo) => (
          <div
            key={photo._id}
            className="bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <div
              role="img"
              aria-label={photo.title}
              className="w-full h-87.5 bg-cover bg-center"
              style={{ backgroundImage: `url(${photo.imageUrl})` }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {photo.title}
              </h3>

              <p className="text-gray-400">
                {photo.category}
              </p>
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}