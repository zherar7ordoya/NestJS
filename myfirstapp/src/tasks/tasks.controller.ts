import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService, User } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
        //return this.tasksService.testing();
    }

    @Get(':id')
    getTask(@Param('id') id: string) {
        console.log(id);
        return this.tasksService.getTask(+id);
    }

    @Post()
    createTask(@Body() task: any) {
        return this.tasksService.createTask(task);
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
