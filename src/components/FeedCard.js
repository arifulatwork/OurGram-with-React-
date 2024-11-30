import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useSelector } from 'react-redux';

export default function FeedCard(props) {
  const { post } = props;

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 445 }} {...props}>
        <CardHeader
          title={post.username}
          subheader={post.date}
        />
        <CardContent>
          Here will be images
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          Here will be actions
        </CardActions>
      </Card>
    </React.Fragment>
  );
}    