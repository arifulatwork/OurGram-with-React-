import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import * as accountService from '../service/AccountService';
import FileUploadButton from './FileUploadButton';

export default function EditProfileScreen() {

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center'}}>
        Avatar Edit Form will be here
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }}>
        Edit Profile Form will be here
      </Grid>
      <Grid size={{ xs: 12, xl: 10 }} sx={{ display: 'flex' }}>
        Post List will be here
      </Grid>
    </Grid>  
  );
}

function EditProfileForm(props) {
  const { profile } = props;
  const [firstName, setFirstName] = React.useState(profile.firstName);
  const dispatch = useDispatch();

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleSave = () => {
    
  }

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