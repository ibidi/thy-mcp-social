import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface PostProps {
  post: {
    author: {
      name: string;
      profileImage: string;
      tier: string;
    };
    content: string;
    images?: string[];
    flightInfo?: {
      flightNumber: string;
      origin: string;
      destination: string;
      departureTime: string;
      arrivalTime: string;
    };
    location?: {
      city: string;
      country: string;
    };
    likes: number;
    comments: Array<{
      author: {
        name: string;
      };
      content: string;
      createdAt: string;
    }>;
    createdAt: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Yazar Bilgisi */}
      <div className="flex items-center mb-4">
        <Image
          src={post.author.profileImage}
          alt={post.author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-semibold">{post.author.name}</h3>
          <span className="text-sm text-gray-500">{post.author.tier}</span>
        </div>
        <span className="ml-auto text-sm text-gray-500">
          {format(new Date(post.createdAt), 'd MMMM yyyy', { locale: tr })}
        </span>
      </div>

      {/* İçerik */}
      <p className="text-gray-800 mb-4">{post.content}</p>

      {/* Uçuş Bilgisi */}
      {post.flightInfo && (
        <div className="bg-gray-50 rounded p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Uçuş</p>
              <p className="font-semibold">{post.flightInfo.flightNumber}</p>
            </div>
            <div className="flex items-center">
              <div className="text-center">
                <p className="font-semibold">{post.flightInfo.origin}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(post.flightInfo.departureTime), 'HH:mm')}
                </p>
              </div>
              <div className="mx-4">✈️</div>
              <div className="text-center">
                <p className="font-semibold">{post.flightInfo.destination}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(post.flightInfo.arrivalTime), 'HH:mm')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Konum */}
      {post.location && (
        <div className="text-sm text-gray-500 mb-4">
          📍 {post.location.city}, {post.location.country}
        </div>
      )}

      {/* Görseller */}
      {post.images && post.images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {post.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Post image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {/* Etkileşim */}
      <div className="flex items-center justify-between border-t pt-4">
        <button className="flex items-center text-gray-500 hover:text-red-600">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {post.likes}
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-600">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {post.comments.length}
        </button>
        <button className="flex items-center text-gray-500 hover:text-green-600">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Paylaş
        </button>
      </div>

      {/* Yorumlar */}
      {post.comments.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <h4 className="font-semibold mb-2">Yorumlar</h4>
          <div className="space-y-2">
            {post.comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 rounded p-3">
                <p className="font-semibold text-sm">{comment.author.name}</p>
                <p className="text-sm text-gray-700">{comment.content}</p>
                <p className="text-xs text-gray-500">
                  {format(new Date(comment.createdAt), 'd MMMM yyyy HH:mm', {
                    locale: tr,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post; 