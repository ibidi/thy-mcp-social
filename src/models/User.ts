import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  memberNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    default: '/default-avatar.png',
  },
  tier: {
    type: String,
    enum: ['Classic', 'Classic Plus', 'Elite', 'Elite Plus'],
    default: 'Classic',
  },
  miles: {
    type: Number,
    default: 0,
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema); 