import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
  }],
  flightInfo: {
    flightNumber: String,
    origin: String,
    destination: String,
    departureTime: Date,
    arrivalTime: Date,
  },
  location: {
    city: String,
    country: String,
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere',
    },
  },
  tags: [{
    type: String,
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Arama için indeksler
postSchema.index({ content: 'text', tags: 'text' });
postSchema.index({ 'flightInfo.flightNumber': 1 });
postSchema.index({ 'location.city': 1, 'location.country': 1 });

export default mongoose.models.Post || mongoose.model('Post', postSchema); 