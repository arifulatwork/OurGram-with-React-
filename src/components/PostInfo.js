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
        Here will be ImageStepper
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
            {/* Add AccountAvatar component here */}
            <div style={{ marginLeft: '5px' }}>
              {/* Add Typography component for the username and comment message */}
              {/* Add Typography component for the comment date */}
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
  }


  return (
    <TextField
      id="cmt"
      label="Comment"
      multiline
      maxRows={4}
      fullWidth
      value={comment}
      onChange={handleChangeComment}
      slotProps={{
        input: {
          endAdornment: <InputAdornment position="start">
          <IconButton disabled={!!!comment} >
            <SendIcon />
          </IconButton>
        </InputAdornment>,
        },
      }}
    />
  );
}