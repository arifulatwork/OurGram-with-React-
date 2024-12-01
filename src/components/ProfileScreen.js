import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { PostList } from "./PostList";

// ProfileScreen component
export default function ProfileScreen() {
  
  const screenOptions = useSelector((state) => state.application.screenOptions);
  const profile = screenOptions.profile; 

  if (!profile) {
    return <Typography variant="h6">Loading...</Typography>;  
  }

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* Avatar Section */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar 
          sx={{ width: 150, height: 150 }}  
          src={profile.avatar}  
          alt={`${profile.username}'s Avatar`}  
        />
      </Grid>

      {/* Profile Info Section */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
        {/* Username */}
        <Typography variant="h6">{profile.username}</Typography>

        {/* Full Name */}
        <Typography variant="body1">
          {profile.firstName} {profile.lastName}
        </Typography>

        {/* Description */}
        <Typography variant="body2">
          {profile.description || "No description available."} 
        </Typography>
      </Grid>

      {/* PostList Section */}
      <Grid item xs={12} xl={10}>
        <PostList profile={profile} />  {/* Pass the profile data to PostList */}
      </Grid>
    </Grid>
  );
}
