import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import * as accountService from '../service/AccountService';
import FileUploadButton from './FileUploadButton'; // Assuming you have this component to handle file upload

// AvatarEditForm Component
function AvatarEditForm({ profile }) {
  return (
    <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
      <Avatar
        sx={{ width: 150, height: 150 }}
        src={profile.avatar}
        alt={`${profile.username}'s Avatar`}
      />
      <FileUploadButton /> {/* Assuming this button is for uploading the avatar */}
    </Stack>
  );
}

// EditProfileScreen Component
export default function EditProfileScreen() {
  // Get current user profile from Redux store
  const profile = useSelector(state => state.account.account); // Get profile from account reducer

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* Avatar Section */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <AvatarEditForm profile={profile} /> {/* Render AvatarEditForm here */}
      </Grid>

      {/* Edit Profile Form Section */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
        <EditProfileForm profile={profile} />
      </Grid>

      {/* Post List Section */}
      <Grid item xs={12} xl={10}>
        {/* Post List component will be placed here */}
      </Grid>
    </Grid>
  );
}

// EditProfileForm Component
function EditProfileForm({ profile }) {
  const [firstName, setFirstName] = React.useState(profile.firstName);
  const dispatch = useDispatch();

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleSave = () => {
    // You can dispatch an action to update the profile here.
    console.log('Saving profile...');
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        id="firstName"
        label="First Name"
        fullWidth
        value={firstName}
        error={!Boolean(firstName)}
        onChange={handleChangeFirstName} 
      />
      <Button onClick={handleSave} disabled={!Boolean(firstName)}>Save</Button>
    </Stack>
  );
}
