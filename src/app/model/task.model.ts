import { TaskStatus } from './task-status.enum';

export interface Task {
    id: number;
    description: string;
    taskStatus: TaskStatus;
    modificationTime: Date;
}
