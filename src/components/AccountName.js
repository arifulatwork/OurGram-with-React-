import React from 'react';
import Typography from '@mui/material/Typography';


export default function AccountName({ username }) {
  return (
    <Typography variant="body2" component="span" sx={{ fontWeight: 'bold' }}>
      {username}
    </Typography>
  );
}
