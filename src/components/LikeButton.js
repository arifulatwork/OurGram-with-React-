import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function LikeButton({ post }) {
  const [liked, setLiked] = useState(false); 

  const handleLikeClick = () => {
    setLiked(!liked); 
    
    console.log(`Post ${post.id} liked status: ${!liked}`);
  };

  return (
    <IconButton onClick={handleLikeClick} color={liked ? 'error' : 'default'}>
      <FavoriteIcon />
    </IconButton>
  );
}
