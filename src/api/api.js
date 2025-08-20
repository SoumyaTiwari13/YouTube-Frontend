import axios from 'axios';


//  GET ALL VIDEO 
export const youtubeAllvideos = async () => {
  const response = await axios.get(`https://youtube-backend-gmra.onrender.com/videos`);
  return response.data;
};

// PLAY WITH VIDEO ID
export const findByIdVideoPlay = async ({ id }) => {
  const response = await axios.get(`https://youtube-backend-gmra.onrender.com/videos/:id`, {
    id,
  });
  return response.data;
};

//  FIND BY CATEGORY 
export const findBycategory = async ({ category }) => {
  const response = await axios.post(`https://youtube-backend-gmra.onrender.com/category`, {
    category,
  });
  return response.data;
};


// SEARCH BY KEYWORD
export const findBySearch = async ({ search }) => {
  const response = await axios.post(`https://youtube-backend-gmra.onrender.com/search`, {
    search,
  });
  return response.data;
};


//  CREATE ACCOUNT
export const signinAccount = async ({ username, email, password }) => {
  const response = await axios.post(`https://youtube-backend-gmra.onrender.com/register`, {
    username,
    email,
    password
  });
  return response.data;
};

//  LIKE A VIDOE 
export const handleLikeVideo = async ({ userId, videoId }) => {
  try {
    const response = await axios.post(`https://youtube-backend-gmra.onrender.com/video/like/increment`, {
      videoId,
      userId
    });
    return response.data;
  } catch (error) {
    console.error('Auth failed:', error?.response?.data || error.message);
    return { success: false };
  }
};

//  LOGIN ACCOUNT
export const loginAccount = async ({ email, password }) => {
  const response = await axios.post(`https://youtube-backend-gmra.onrender.com/login`, {
    email,
    password
  });
  return response.data;
};

// CREATE COMMENT
export const createComments = async ({ comments, videoId, authToken }) => {
  const response = await axios.post(`https://youtube-backend-gmra.onrender.com/:id/comments`, {
    comments, videoId, authToken
  });
  return response.data;
};

// DELETE COMMENT
export const DeleteComments = async ({ userId,
  videoId,
  commentId, authToken }) => {
  const response = await axios.delete(`https://youtube-backend-gmra.onrender.com/:commentId`, {
    userId,
    videoId,
    commentId,
    authToken
  });
  return response.data;
};


// UPDATE COMMENT
export const UpdateComments = async ({ userId, videoId, commentId, authToken, updatedText }) => {
  const response = await axios.put(`https://youtube-backend-gmra.onrender.com/:commentId`, {
    userId,
    videoId,
    commentId,
    authToken,
    updatedText
  });
  return response.data;
};

// CHECK AUTH USER IS VALID OR NOT 
export const handleAuth = async ({ authToken }) => {
  try {
    const response = await axios.get(`https://youtube-backend-gmra.onrender.com/auth`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Auth failed:', error?.response?.data || error.message);
    return { success: false };
  }
};



export const handleCreateChannle = async ({ id,channelName }) => {
  try {
    const response = await axios.post(`https://youtube-backend-gmra.onrender.com/channel`, {
      id,
      channelName
    });
    return response.data;
  } catch (error) {
    console.error('Auth failed:', error?.response?.data || error.message);
    return { success: false };
  }
};