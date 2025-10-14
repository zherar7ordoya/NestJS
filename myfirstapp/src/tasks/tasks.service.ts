import { Injectable } from "@nestjs/common";

export interface User {
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class TasksService {
testing() {
        return 'This is a test';
    }

    getTasks() : User[] {
        return [
            { id: 1, name: 'Task 1', age: 25 },
            { id: 2, name: 'Task 2', age: 30 },
            { id: 3, name: 'Task 3', age: 35 }
        ];
    }

    createTask() {
        return 'Creating a task from service...';
    }

    updateTask() {
        return 'Updating a task from service...';
    }

    deleteTask() {
        return 'Deleting a task from service...';
    }

    patchTask() {
        return 'Patching a task from service...';
    }

}