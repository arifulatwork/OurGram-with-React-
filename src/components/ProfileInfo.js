import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Typography, Button } from '@mui/material';
import { PostList } from './PostList';

const MY_PROFILE = 'myProfile';
const EDIT_PROFILE = 'editProfile';

export default function ProfileInfo({ profile }) {
  const activeScreen = useSelector(state => state.application.activeScreen);
  const isMyProfile = activeScreen === MY_PROFILE;

  const dispatch = useDispatch();

  const handleEditProfileClick = () => {
    dispatch({
      type: 'SET_ACTIVE_SCREEN',
      payload: { screen: EDIT_PROFILE }
    });
  };

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">{profile.username}</Typography>
        {isMyProfile && (
          <Button variant="contained" color="primary" onClick={handleEditProfileClick}>
            Edit Profile
          </Button>
        )}
      </Stack>

      <Typography variant="body1">
        {profile.firstName} {profile.lastName}
      </Typography>

      <Typography variant="body2">
        {profile.description}
      </Typography>
    </Stack>
  );
}
