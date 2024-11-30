import React from "react";
import Grid from "@mui/material/Grid2";
import AccountInfo from "./AccountInfo";
import NewsFeed from "./NewsFeed";

export default function HomeScreen() {
  return (
    <Grid container >
      <Grid size={{ xs: 12, lg: 8 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <NewsFeed/>
      </Grid>
      <Grid size={{ lg: 4 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <AccountInfo/>
      </Grid>
    </Grid>
  );
}