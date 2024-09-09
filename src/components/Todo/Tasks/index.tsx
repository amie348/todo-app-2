import React, { useEffect } from 'react';
import { ITask } from '@utility/interfaces';
import { Typography, Container, Box } from '@mui/material';
import Task from './Task';
import { useTodoStore } from '@src/store/todoStore';
import { useQuery } from 'react-query';
import axios from 'axios';
import { API_BASE_URL } from '@src/config';
import { fetchTasks } from '@src/apis';

export default function Tasks() {
  const todoStore = useTodoStore();

  const { data, isLoading, error, refetch } = useQuery('tasks', fetchTasks, {
    enabled: false,
    onSuccess: (data) => {
      todoStore.set(data);
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        {!todoStore.get().length ? (
          <Typography
            sx={{
              fontSize: '1rem',
              color: 'white',
            }}
          >
            Seems lonely in here, what are you up to?
          </Typography>
        ) : (
          <>
            {todoStore.get().map((task: ITask) => (
              <Task key={task._id} task={task} />
            ))}
          </>
        )}
      </Box>
    </Container>
  );
}
