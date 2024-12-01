import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AccountAvatar from './AccountAvatar';

import ImageStepper from './ImageStepper';
import * as postService from '../service/PostService';

export default function PostInfo(props) {
  const { post } = props;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  let commentStyles = { height: '0px' };
  if (mobile) {
    commentStyles = { maxHeight: '400px' };
  }

  return (
    <Grid container >
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
      <ImageStepper images={post.images} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body2">{post.description}</Typography>
        <div style={{ flex: '1 1 auto', overflowY: 'auto', marginTop: '8px', ...commentStyles }}>
          <CommentList comments={post.comments}/>
        </div>
        <AddCommentField postId={post.postId}/>
      </Grid>
    </Grid>
  );
}

function CommentList(props) {
  const { comments } = props;

  return (
    <React.Fragment>
      { comments.map((comment, index) => {
        return (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }} p={1}>
            <AccountAvatar username={comment.username} size="small" />
            <div style={{ marginLeft: '5px' }}>
            <Typography variant="body2">
              <strong>{comment.username}</strong>: {comment.msg}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {comment.date}
            </Typography>
            </div>
          </Box>
        );
      })} 
    </React.Fragment>  
  );
}

function AddCommentField(props) {
  const { postId } = props;
  const [comment, setComment] = React.useState('');

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    postService.addPostComment(postId, comment).then((response) => {
      setComment(''); 
    }).catch((error) => {
      console.error('Error adding comment:', error);
    });
  };

  return (
    <TextField
      id="cmt"
      label="Comment"
      multiline
      maxRows={4}
      fullWidth
      value={comment}
      onChange={handleChangeComment}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleAddComment}
              disabled={!comment.trim()} // Disable button if the comment is empty
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
