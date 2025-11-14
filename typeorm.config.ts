
import { Aluno } from 'src/aluno/entity/aluno.entity';
import { DataSource } from 'typeorm';


export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'SistemaEscolar',
  entities: [Aluno],
  migrations: ['dist/migrations/*.js'],
});