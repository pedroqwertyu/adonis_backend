import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmaAluno from 'App/Models/TurmaAluno'

export default class extends BaseSeeder {
  public async run () {
    await TurmaAluno.createMany([
      {turmaId: 1, alunoId: 1}, 
      {turmaId: 1, alunoId: 3},
      {turmaId: 1, alunoId: 4},
      {turmaId: 1, alunoId: 5},
      {turmaId: 2, alunoId: 2},
      {turmaId: 2, alunoId: 3},
    ])
  }
}
