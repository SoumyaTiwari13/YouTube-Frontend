import api from "api.js";

// Channels
export async function createChannel(channelName, description) {
  return api.post("/channel", { channelName, description });
}

// Videos
export async function createVideo(videoData) {
  return api.post("/videos", videoData);
}

export async function listVideos() {
  return api.get("/videos");
}

export async function getVideoById(id) {
  return api.get(`/videos/${id}`);
}

// Comments
export async function addComment(videoId, text) {
  return api.post(`/comments/${videoId}`, { text });
}

export async function listComments(videoId) {
  return api.get(`/comments/${videoId}`);
}

// Likes
export async function toggleLike(videoId, action) {
  return api.post(`/videos/${videoId}/like?action=${action}`);
}
