/*
Cuando hablamos de controladores, solamente estamos hablando
de funciones que se van a llamar cuando una ruta sea visitada.
*/

import { Controller } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {}
