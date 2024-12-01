import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import * as accountService from '../service/AccountService';
import FileUploadButton from './FileUploadButton';
import { PostList } from './PostList';

function AvatarEditForm({ profile }) {
  const dispatch = useDispatch();

  const handleFileUpload = (src) => {
    accountService.updateProfileAvatar(src).then(response => {
      dispatch({ type: 'loadAccount', payload: response.data });
    });
  };

  return (
    <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
      <Avatar
        sx={{ width: 150, height: 150 }}
        src={profile.avatar}
        alt={`${profile.username}'s Avatar`}
      />
      <FileUploadButton title="Change profile picture" onFileUpload={handleFileUpload} />
    </Stack>
  );
}

function EditProfileForm({ profile }) {
  const [firstName, setFirstName] = React.useState(profile.firstName);
  const [lastName, setLastName] = React.useState(profile.lastName);
  const [description, setDescription] = React.useState(profile.description || '');
  const dispatch = useDispatch();

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    accountService.updateProfile({ firstName, lastName, description }).then(response => {
      dispatch({ type: 'loadAccount', payload: response.data });
      dispatch({ type: 'showMyProfile' });
    });
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
      <TextField
        id="lastName"
        label="Last Name"
        fullWidth
        value={lastName}
        error={!Boolean(lastName)}
        onChange={handleChangeLastName}
      />
      <TextField
        id="description"
        label="Description"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={handleChangeDescription}
      />
      <Button 
        onClick={handleSave} 
        disabled={!Boolean(firstName) || !Boolean(lastName) || !Boolean(description)}
      >
        Save
      </Button>
    </Stack>
  );
}

export default function EditProfileScreen() {
  const profile = useSelector(state => state.account.account);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <AvatarEditForm profile={profile} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={5}>
        <EditProfileForm profile={profile} />
      </Grid>
      <Grid item xs={12} xl={10}>
        <PostList profile={profile} editMode={true} />
      </Grid>
    </Grid>
  );
}
