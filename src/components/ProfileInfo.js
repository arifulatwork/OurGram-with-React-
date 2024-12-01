import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

export default function ProfileInfo({ profile, onEditProfileClick }) {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">{profile.username}</Typography>

        <Button variant="contained" color="primary" onClick={onEditProfileClick}>
          Edit Profile
        </Button>
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
