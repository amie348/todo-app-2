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
