import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306, //padrao mysql
    username: 'root',
    password: '',
    database: 'SistemaEscolar',
    autoLoadEntities: true,
    synchronize: false,  // importante! false em produção
    logging: true,
}),

    AlunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor (private dataSource:DataSource){}
}
