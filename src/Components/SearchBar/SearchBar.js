import React from "react";
import { Grid, Paper, TextField, Button } from "material-ui";

import { styles } from "./styles";

export default function SearchBar() {
  return (
    <Grid container style={styles.container}>
      <Grid item xs={12}>
        <Paper style={styles.Paper}>
          <Grid container>
            <Grid item xs={9}>
              <TextField
                margin="dense"
                id="searchField"
                label="Search for an item"
                placeholder="Seach the name of an item"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth style={styles.Button}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
