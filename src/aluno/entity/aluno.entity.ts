import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("aluno")
export class Aluno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    turma: string;

    @Column()
    matricula: number;
}

