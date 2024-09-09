import ActionButton from '@components/common/ActionButton';
import { Box, Container, TextField, Typography } from '@mui/material';
import { ITask, TaskFormValues, TaskInputProps } from '@utility/interfaces';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const TaskInput: React.FC<TaskInputProps> = ({ control, error, onBlur }) => (
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
        onBlur={onBlur}
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

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: { content: task.content },
  });

  const handleFieldEditing = () => setIsEditing(false);

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
        <TaskInput control={control} error={errors.content} onBlur={handleFieldEditing} />
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
              onClick={() => {}}
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
            </Typography>{' '}
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
            <ActionButton Icon="delete" onClick={() => {}} styles={{ minWidth: '0px' }} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
