import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './entity/aluno.entity';
import { UpsertDTO } from './dto/upsert.dto';

@Injectable()
export class AlunoService {
    constructor (@InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
    ) {}

    //Verificar se o id e existente

    private async findAlunoById(id:number): Promise<Aluno>{
        const aluno = await this.alunoRepository.findOneBy({id});
        if(!aluno){
            throw new NotFoundException(`Aluno não encontrado com id${id}`)
        }
        return aluno
    }


    findAll(): Promise<Aluno[]> {
        return this.alunoRepository.find()
    }

    async findOne(id: number): Promise<Aluno>{
        return this.findAlunoById(id);
    }

    async remove(id:number): Promise<{message : string }>{
        await this.findAlunoById(id);
        await this.alunoRepository.delete(id);
        return {message : `Aluno com id${id} deletado`}

    }

    async create(UpsertDTO:UpsertDTO):Promise<Aluno>{
        const newAluno =  this.alunoRepository.create(UpsertDTO)
        await this.alunoRepository.save(newAluno)
        return newAluno

    }

    async update(id:number, UpsertDTO:UpsertDTO): Promise<Aluno | null>{
        await this.findAlunoById(id);
        await this.alunoRepository.update(id,UpsertDTO);
        return this.alunoRepository.findOneBy({id})
    }







    
    
    
    
    
}
