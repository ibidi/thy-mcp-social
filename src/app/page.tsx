import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Hoş Geldiniz!</h2>
        <p className="text-lg text-gray-700 mb-4">
          THY Travel Social ile seyahat deneyimlerinizi paylaşın, yeni rotalar keşfedin
          ve diğer gezginlerle bağlantı kurun.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">🌍 Popüler Rotalar</h3>
          <p className="text-gray-600">
            En çok ziyaret edilen destinasyonları keşfedin ve deneyimli gezginlerin önerilerini okuyun.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">💫 Mil Puanı Taktikleri</h3>
          <p className="text-gray-600">
            Miles&Smiles programını en verimli şekilde kullanmanın yollarını öğrenin.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">👥 Grup Seyahatleri</h3>
          <p className="text-gray-600">
            Benzer ilgi alanlarına sahip gezginlerle tanışın ve grup seyahatleri planlayın.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Son Paylaşımlar</h2>
        <div className="space-y-4">
          {/* Buraya paylaşım kartları gelecek */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-500 mb-2">Henüz paylaşım bulunmuyor.</p>
            <button className="text-red-600 hover:text-red-700">
              İlk paylaşımı siz yapın!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 