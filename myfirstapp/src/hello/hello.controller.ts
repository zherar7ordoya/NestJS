/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseFilePipeBuilder, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';

@Controller()
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({ message: 'Hello World' });
    }

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return "Something New";
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(@Req() request: Request, @Res() response: Response) {
        //console.log(request.url);
        //response.status(404).json({ message: 'Not Found' });
        return "Not Found";
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return "Internal Server Error";
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        console.log(typeof query.name);
        console.log(typeof query.age);
        return `Hello ${query.name}, you are ${query.age + 100} years old.`;
    }
}
