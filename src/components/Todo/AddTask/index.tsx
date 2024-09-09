// AddTask.tsx
import React from 'react';
import { useForm, Controller, FieldError, Control } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { hookstate } from '@hookstate/core';
import { TextField, Button, Box } from '@mui/material';
import ActionButton from '@components/common/ActionButton';
import { TaskFormValues, TaskInputProps } from '@utility/interfaces';
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
  //   const queryClient = useQueryClient();

  //   const addMutation = useMutation(addTodo, {
  //     onSuccess: (newTodo) => {
  //       queryClient.invalidateQueries('todos');
  //       todosState.merge([newTodo]);
  //     },
  //   });

  //   const onSubmit = (data: TaskFormValues) => {
  //     addMutation.mutate(data.text);
  //     reset();
  //   };

  return (
    <Box
      component="form"
      //   onSubmit={handleSubmit(onSubmit)}
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
        onClick={() => {}}
        Icon="plus"
      />
    </Box>
  );
};

export default AddTask;
