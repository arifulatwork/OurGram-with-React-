import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { PostList } from './PostList';
import ProfileInfo from './ProfileInfo';  // Import ProfileInfo

export default function ProfileScreen() {
  const screenOptions = useSelector((state) => state.application.screenOptions);
  const profile = screenOptions.profile; 

  if (!profile) {
    return <Typography variant="h6">Loading...</Typography>;  
  }

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
        {/* Add ProfileInfo here with only Edit Profile button */}
        <ProfileInfo profile={profile} />
      </Grid>

      <Grid item xs={12} xl={10}>
        <PostList profile={profile} /> 
      </Grid>
    </Grid>
  );
}
