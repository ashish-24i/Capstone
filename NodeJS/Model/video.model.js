import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: String,
  userId: String,
  text: String,
  timestamp: Date,
});

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true },
  title: String,
  thumbnailUrl: String,
  description: String,
  channelId: String,
  uploader: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  uploadDate: Date,

  videoUrl:String,
  comments: [commentSchema],  
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
