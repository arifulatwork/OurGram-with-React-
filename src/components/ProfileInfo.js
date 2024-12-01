import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Typography, Button } from '@mui/material';

// Constants for active screen
const MY_PROFILE = 'myProfile';  // Replace with actual value if needed
const EDIT_PROFILE = 'editProfile'; // The constant representing the edit profile screen

export default function ProfileInfo({ profile }) {
  // Get activeScreen from the Redux store to check if this is the user's profile
  const activeScreen = useSelector(state => state.application.activeScreen);
  const isMyProfile = activeScreen === MY_PROFILE;  // Check if the profile is the user's profile

  // Get the dispatch function from useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Handler for the "Edit Profile" button click
  const handleEditProfileClick = () => {
    // Dispatch action to set the active screen to EDIT_PROFILE
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
