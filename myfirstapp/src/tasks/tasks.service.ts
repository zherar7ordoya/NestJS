import { Injectable } from "@nestjs/common";

export interface User {
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks: any = [];


    testing() {
        return 'This is a test';
    }

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {

        const taskFound = this.tasks.find((task: any) => task.id === id);

        if (!taskFound) {
            return `Task with id ${id} not found`;
        }

        return taskFound;
    }

    createTask(task: any) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
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