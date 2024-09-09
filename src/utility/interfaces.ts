import { Control, FieldError } from 'react-hook-form';

export interface ITask {
  _id?: string;
  content: string;
  isCompleted: boolean;
}

export interface TasksState {
  tasks: ITask[];
  loading: boolean;
  error: any;
}

export interface TaskFormValues {
  content: string;
}

export interface TaskInputProps {
  control: Control<TaskFormValues>;
  error?: FieldError;
  onBlur?: () => void;
}
