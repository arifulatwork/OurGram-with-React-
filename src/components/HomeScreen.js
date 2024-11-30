import React from "react";
import Grid from "@mui/material/Grid2";

export default function HomeScreen() {
  return (
    <Grid container >
      <Grid size={{ xs: 12, lg: 8 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        News Feed will be here
      </Grid>
      <Grid size={{ lg: 4 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
        Account Info will be here
      </Grid>
    </Grid>
  );
}