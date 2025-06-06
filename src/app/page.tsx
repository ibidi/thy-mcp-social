import React from 'react';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

const dummyPost = {
  author: {
    name: 'Ahmet Yılmaz',
    profileImage: '/default-avatar.png',
    tier: 'Elite Plus',
  },
  content: 'İstanbul-Tokyo uçuşumda harika bir deneyim yaşadım! Turkish Airlines\'in business class servisi gerçekten üst düzey. Özellikle ikramlar ve kabin ekibinin ilgisi muhteşemdi. 🛫✨',
  images: [
    '/sample/flight1.jpg',
    '/sample/flight2.jpg',
  ],
  flightInfo: {
    flightNumber: 'TK52',
    origin: 'IST',
    destination: 'NRT',
    departureTime: '2024-03-15T22:35:00Z',
    arrivalTime: '2024-03-16T17:45:00Z',
  },
  location: {
    city: 'Tokyo',
    country: 'Japonya',
  },
  likes: 124,
  comments: [
    {
      author: {
        name: 'Mehmet Demir',
      },
      content: 'Harika görünüyor! Ben de gelecek ay aynı rotada uçacağım.',
      createdAt: '2024-03-15T23:15:00Z',
    },
    {
      author: {
        name: 'Ayşe Kaya',
      },
      content: 'Business Class\'ta "Do&Co" ikramları favorim! 😋',
      createdAt: '2024-03-16T08:30:00Z',
    },
  ],
  createdAt: '2024-03-15T22:45:00Z',
};

export default function Home() {
  const handlePostCreated = () => {
    // Yeni gönderi oluşturulduğunda yapılacak işlemler
    console.log('Yeni gönderi oluşturuldu');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Hoş Geldiniz!</h2>
        <p className="text-lg text-gray-700 mb-4">
          THY Travel Social ile seyahat deneyimlerinizi paylaşın, yeni rotalar keşfedin
          ve diğer gezginlerle bağlantı kurun.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CreatePost onPostCreated={handlePostCreated} />
          <Post post={dummyPost} />
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">🌍 Popüler Rotalar</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">İstanbul → Dubai</li>
              <li className="text-gray-600">İstanbul → Londra</li>
              <li className="text-gray-600">İstanbul → New York</li>
              <li className="text-gray-600">İstanbul → Tokyo</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">💫 Mil Puanı Taktikleri</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Status Miles vs Bonus Miles</li>
              <li className="text-gray-600">Upgrade İpuçları</li>
              <li className="text-gray-600">Lounge Erişimi</li>
              <li className="text-gray-600">Partner Havayolları</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">👥 Aktif Gruplar</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Uzakdoğu Gezginleri</li>
              <li className="text-gray-600">Business Class Deneyimleri</li>
              <li className="text-gray-600">Avrupa Rotaları</li>
              <li className="text-gray-600">Miles&Smiles Elite Plus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 