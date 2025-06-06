import React, { useState } from 'react';
import { thyAPI } from '../lib/mcp';

interface CreatePostProps {
  onPostCreated: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flightNumber, setFlightNumber] = useState('');
  const [showFlightInfo, setShowFlightInfo] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Uçuş bilgilerini kontrol et
      let flightInfo = null;
      if (flightNumber) {
        const flightStatus = await thyAPI.getFlightStatus(flightNumber);
        if (flightStatus) {
          flightInfo = flightStatus;
        }
      }

      // Görselleri yükle
      const imageUrls = [];
      for (const image of images) {
        // Burada görsel yükleme işlemi yapılacak
        // const imageUrl = await uploadImage(image);
        // imageUrls.push(imageUrl);
      }

      // Gönderiyi oluştur
      // await createPost({
      //   content,
      //   images: imageUrls,
      //   flightInfo,
      // });

      // Formu temizle
      setContent('');
      setImages([]);
      setFlightNumber('');
      setShowFlightInfo(false);

      // Başarılı callback
      onPostCreated();
    } catch (error) {
      console.error('Gönderi oluşturulurken hata:', error);
      // Hata mesajı göster
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Seyahat deneyiminizi paylaşın..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />

        <div className="flex flex-wrap gap-4 mb-4">
          <button
            type="button"
            className="flex items-center text-gray-600 hover:text-red-600"
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Fotoğraf Ekle
          </button>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <button
            type="button"
            className="flex items-center text-gray-600 hover:text-red-600"
            onClick={() => setShowFlightInfo(!showFlightInfo)}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Uçuş Bilgisi Ekle
          </button>
        </div>

        {showFlightInfo && (
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Uçuş numarası (örn: TK1234)"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
          </div>
        )}

        {images.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">
              Seçilen fotoğraflar: {images.length}
            </p>
            <div className="flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 rounded p-2"
                >
                  <span className="text-sm">{image.name}</span>
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    onClick={() => setImages(images.filter((_, i) => i !== index))}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
            disabled={isLoading || !content.trim()}
          >
            {isLoading ? 'Paylaşılıyor...' : 'Paylaş'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost; 