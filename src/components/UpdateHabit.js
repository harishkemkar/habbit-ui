import React, { useState } from "react";
import { updateHabit } from "../api/habits";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  MenuItem
} from "@mui/material";

function UpdateHabit() {
  const [userId, setUserId] = useState("");
  const [habitId, setHabitId] = useState("");
  const [status, setStatus] = useState("active");

  const handleUpdate = async () => {
    try {
      const res = await updateHabit(userId, habitId, { status });
      alert(res.data.message);
    } catch (err) {
      alert("Error updating habit");
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Update Habit Status
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
        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUpdate}
          fullWidth
          sx={{ mt: 2 }}
        >
          Update Habit
        </Button>
      </CardContent>
    </Card>
  );
}

export default UpdateHabit;
