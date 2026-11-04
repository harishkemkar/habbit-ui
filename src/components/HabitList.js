import React, { useState } from "react";
import { getHabit, deleteHabit } from "../api/habits";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Divider
} from "@mui/material";

function HabitList() {
  const [userId, setUserId] = useState("");
  const [habitId, setHabitId] = useState("");
  const [habit, setHabit] = useState(null);

  const handleFetch = async () => {
    try {
      const res = await getHabit(userId, habitId);
      setHabit(res.data);
    } catch (err) {
      alert("Habit not found");
      setHabit(null);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteHabit(userId, habitId);
      alert("Habit deleted");
      setHabit(null);
    } catch (err) {
      alert("Error deleting habit");
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Search & Manage Habits
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Habit ID"
          value={habitId}
          onChange={(e) => setHabitId(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleFetch}
          sx={{ mt: 2 }}
        >
          Fetch Habit
        </Button>

        {habit && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">{habit.title}</Typography>
            <Typography>User: {habit.user_id}</Typography>
            <Typography>ID: {habit.habit_id}</Typography>
            <Typography>Status: {habit.status}</Typography>
            <Typography>Frequency: {habit.frequency}</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDelete}
              sx={{ mt: 2 }}
            >
              Delete Habit
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default HabitList;
