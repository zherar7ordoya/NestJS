import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService, User } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() : User[] {
        return this.tasksService.getTasks();
        //return this.tasksService.testing();
    }

    @Post()
    createTask() {
        return this.tasksService.createTask();
    }

    @Put()
    updateTask() {
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    patchTask() {
        return this.tasksService.patchTask();
    }
}
