import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

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
        if (!taskFound) return new NotFoundException(`Task with id ${id} not found`);
        return taskFound;
    }

    createTask(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        console.log(task);
        return 'Updating a task from service...';
    }

    deleteTask() {
        return 'Deleting a task from service...';
    }

    patchTask() {
        return 'Patching a task from service...';
    }

}