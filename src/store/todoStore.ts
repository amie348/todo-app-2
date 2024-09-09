import { hookstate, useHookstate } from '@hookstate/core';
import { ITask } from '@utility/interfaces';

const todoStore = hookstate<ITask[]>([]);

export const useTodoStore = () => useHookstate(todoStore);
export default todoStore;
