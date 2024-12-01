import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { PostList } from './PostList';
import ProfileInfo from './ProfileInfo';

export default function ProfileScreen() {
  const screenOptions = useSelector((state) => state.application.screenOptions);
  const profile = screenOptions.profile;
  const dispatch = useDispatch();

  if (!profile) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const handleEditProfileClick = () => {
    dispatch({
      type: 'SET_ACTIVE_SCREEN',
      payload: { screen: 'editProfile' }
    });
  };

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar 
          sx={{ width: 150, height: 150 }}  
          src={profile.avatar}  
          alt={`${profile.username}'s Avatar`}  
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
        {/* ProfileInfo with edit button */}
        <ProfileInfo profile={profile} onEditProfileClick={handleEditProfileClick} />
      </Grid>

      <Grid item xs={12} xl={10}>
        <PostList profile={profile} />
      </Grid>
    </Grid>
  );
}
