import ActionButton from '@components/common/ActionButton';
import { Box, TextField, Typography } from '@mui/material';
import { deleteTask, updateTask } from '@src/apis';
import { useTodoStore } from '@src/store/todoStore';
import { ITask, TaskFormValues, TaskInputProps } from '@utility/interfaces';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

interface EditTaskInputProps extends TaskInputProps {
  onBlur: () => void;
}

const TaskInput: React.FC<EditTaskInputProps> = ({ control, error, onBlur }) => (
  <Controller
    name="content"
    control={control}
    defaultValue=""
    rules={{ required: 'taskContent is required' }}
    render={({ field }) => (
      <TextField
        {...field}
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={error?.message}
        onBlur={(e) => {
          field.onBlur();
          onBlur();
        }}
        sx={{
          mr: 2,
          height: 50,
          backgroundColor: 'none',
          borderRadius: '0px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: 'none' },
          },
          '& input': {
            color: 'white',
            padding: '16px',
            fontSize: '14px',
          },
          '&::placeholder': {
            color: '#6b7280',
            fontSize: '14px',
          },
        }}
      />
    )}
  />
);

export default function Task({ task }: { task: ITask }) {
  const [isEditing, setIsEditing] = useState(false);
  const todoStore = useTodoStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: { content: task.content },
  });

  const queryClient = useQueryClient();

  const { mutate: update } = useMutation(updateTask, {
    onSuccess: (updatedTask) => {
      queryClient.invalidateQueries('todos');
    },
  });

  const { mutate: deletetask } = useMutation(deleteTask, {
    onSuccess: (updatedTask) => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleUpdateTask = (data: TaskFormValues) => {
    update({ ...task, content: data.content });
    todoStore.set((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask._id === task._id ? { ...prevTask, content: data.content } : prevTask
      )
    );
    setIsEditing(false);
    reset();
  };

  const handleBlur = handleSubmit(handleUpdateTask);

  const handleCompleteTask = () => {
    update({ ...task, isCompleted: !task.isCompleted });
    todoStore.set((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask._id === task._id ? { ...prevTask, isCompleted: !prevTask.isCompleted } : prevTask
      )
    );
  };

  const handleDeleteTask = () => {
    deletetask(task._id as string);
    todoStore.set((prevTasks) => prevTasks.filter((prevTask) => prevTask._id !== task._id));
  };

  return (
    <Box
      sx={{
        border: '1px solid #C2B39A',
        background: 'none',
        marginTop: '10px',
        margingBottom: '10px',
      }}
    >
      {isEditing ? (
        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TaskInput control={control} error={errors.content} onBlur={handleBlur} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              p: '0px',
            }}
          >
            <ActionButton
              Icon={task.isCompleted ? 'filledcircle' : 'circle'}
              onClick={handleCompleteTask}
              styles={{ minWidth: '0px' }}
            />
            <Typography
              onClick={() => setIsEditing(true)}
              sx={{
                paddingTop: '10px',
                color: 'white',
                cursor: 'pointer',
                textDecoration: `${task.isCompleted ? 'line-through' : 'none'}`,
              }}
            >
              {task.content}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <ActionButton
              Icon="edit"
              onClick={() => setIsEditing(true)}
              styles={{ minWidth: '0px' }}
            />
            <ActionButton Icon="delete" onClick={handleDeleteTask} styles={{ minWidth: '0px' }} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
