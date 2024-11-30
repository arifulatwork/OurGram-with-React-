import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as postService from '../service/PostService';
import { useDispatch } from 'react-redux';
import FileUploadButton from './FileUploadButton';

export default function CreatePostScreen() {
  const [images, setImages] = React.useState([]);

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center'}}>
        <Stack direction="column" spacing={2}>
          Images upload component will be here
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }}>
        Post Form will be here
      </Grid>
    </Grid>
  );
}