import React, { useState } from "react";
import { createHabit } from "../api/habits";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  MenuItem
} from "@mui/material";

function HabitForm() {
  const [habit, setHabit] = useState({
    user_id: "",
    habit_id: "",
    status: "active",
    title: "",
    frequency: ""
  });

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createHabit(habit);
      alert(res.data.message);
    } catch (err) {
      alert("Error creating habit");
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add New Habit
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="User ID"
            name="user_id"
            value={habit.user_id}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Habit ID"
            name="habit_id"
            value={habit.habit_id}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={habit.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Frequency"
            name="frequency"
            value={habit.frequency}
            onChange={handleChange}
          />
          <TextField
            select
            fullWidth
            margin="normal"
            label="Status"
            name="status"
            value={habit.status}
            onChange={handleChange}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Create Habit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default HabitForm;
