/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller()
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({ message: 'Hello World' });
    }
}
