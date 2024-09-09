import React, { useEffect } from 'react';
import { ITask } from '@utility/interfaces';
import { Typography, Container, Box, Paper } from '@mui/material';
import Task from './Task';

const tasks: ITask[] = [
  {
    _id: '0',
    content: 'Clean the kitchen',
    isCompleted: false,
  },
  {
    _id: '1',
    content: 'Clean the kitchen',
    isCompleted: true,
  },
];

export default function Tasks() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          sx={{
            fontSize: '1rem',
            color: 'white',
          }}
        >
          Seems lonely in here, what are you up to?
        </Typography>
        {tasks.map((task: ITask) => (
          <Task task={task} />
        ))}
      </Box>
    </Container>
  );
}
