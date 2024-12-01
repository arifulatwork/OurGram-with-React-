import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useSelector } from 'react-redux';
import AccountName from './AccountName';
import AccountNameButton from './AccountNameButton';
import ImageStepper from './ImageStepper';
import PostInfoDialog from './PostInfoDialog';
import LikeButton from './LikeButton';

export default function FeedCard(props) {
  const { post } = props;
  const account = useSelector((state) => state.account.account);

  const isMyPost = account.userId === post.userId;

  
  const [openPost, setOpenPost] = React.useState(false);


  const handleOpenPost = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);

  return (
    <>
      <Card sx={{ maxWidth: 445 }} {...props}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              {post.username.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={
            isMyPost ? (
              <AccountName username={post.username} />
            ) : (
              <AccountNameButton username={post.username} userId={post.userId} />
            )
          }
          subheader={post.date}
        />
        <CardContent>
          {/* Add the ImageStepper component and pass the images array */}
          {post.images && post.images.length > 0 && (
            <ImageStepper images={post.images} />
          )}
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
            {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <LikeButton post={post} />
          <IconButton aria-label="comment" onClick={handleOpenPost}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/* PostInfoDialog Component */}
      <PostInfoDialog open={openPost} onClose={handleClosePost} post={post} />
    </>
  );
}
