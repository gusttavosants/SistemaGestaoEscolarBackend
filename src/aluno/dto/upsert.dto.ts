import { isNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class UpsertDTO{
    @MinLength(3)
    @IsString({message : 'tem quer ser uma string'})
    
    nome:string;
    turma:string;

    @IsNumber()
    matricula:number
    idade:number
}npx typeorm-ts-node-commonjs migration:generate ./migrations/CreateAluno--dataSource ./typeorm.config.ts
