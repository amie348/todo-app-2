// AddTask.tsx
import React from 'react';
import { useForm, Controller, FieldError, Control } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { hookstate } from '@hookstate/core';
import { TextField, Button, Box } from '@mui/material';
import ActionButton from '@components/common/ActionButton';
import { TaskFormValues, TaskInputProps } from '@utility/interfaces';
import { useTodoStore } from '@src/store/todoStore';
import { addTask } from '@src/apis';
// import { addTodo } from './api'; // Assuming API function in a separate file
// import { todosState } from './state'; // Global state file for todos

const TaskInput: React.FC<TaskInputProps> = ({ control, error }) => (
  <Controller
    name="content"
    control={control}
    defaultValue=""
    rules={{ required: 'taskContent is required' }}
    render={({ field }) => (
      <TextField
        {...field}
        placeholder="Write your next task"
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={error?.message}
        sx={{
          mr: 2,
          height: 50,
          backgroundColor: '#1f2937',
          borderRadius: '11px',
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

const AddTask: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>();
  const todoStore = useTodoStore();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addTask, {
    onSuccess: (newTodo) => {
      queryClient.invalidateQueries('todos');
      todoStore.merge([newTodo]);
      reset();
    },
  });

  const onSubmit = (data: TaskFormValues) => mutate({ ...data, isCompleted: false });

  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TaskInput control={control} error={errors.content} />
      <ActionButton
        styles={{
          height: 50,
          minWidth: 40,
          backgroundColor: '#88ab33',
          borderRadius: '8px',
        }}
        onClick={handleSubmit(onSubmit)}
        Icon="plus"
      />
    </Box>
  );
};

export default AddTask;
