import { Controller, Get } from '@nestjs/common';
import { find } from 'rxjs';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor (private readonly alunoService: AlunoService) {}

    @Get('findAll')
    findAll():any {
        return this.alunoService.findAll();
    }
}



