import React from "react";
import "./App.css";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import UpdateHabit from "./components/UpdateHabit";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper
} from "@mui/material";

// Define a custom theme with colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2" // blue
    },
    secondary: {
      main: "#9c27b0" // purple
    },
    error: {
      main: "#d32f2f" // red
    },
    success: {
      main: "#2e7d32" // green
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Habit Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 🔹 Add the test line here */}
      <Typography variant="h4" color="primary" sx={{ mt: 2, textAlign: "center" }}>
      This should be blue
      </Typography>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Add Habit Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" color="secondary" gutterBottom>
                Add a New Habit
              </Typography>
              <HabitForm />
            </Paper>
          </Grid>

          {/* Search & Manage Habits Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" color="secondary" gutterBottom>
                Search & Manage Habits
              </Typography>
              <HabitList />
            </Paper>
          </Grid>

          {/* Update Habit Section */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" color="secondary" gutterBottom>
                Update Habit Status
              </Typography>
              <UpdateHabit />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
