import Grid from "@mui/material/Grid2";
import React from "react";

export default function ProfileScreen() {
  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center'}}>
        Avatar will be here
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }}>
        Profile Info will be here
      </Grid>
      <Grid size={{ xs: 12, xl: 10 }}>
        Post List will be here
      </Grid>
    </Grid>
  );
}
