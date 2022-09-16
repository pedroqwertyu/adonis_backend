import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: 'turma doida', professorId: 1, semestreId: 1, disciplinaId: 1, salaId: 1, turno: 'Matutino'},
      {nome: 'turma louca', professorId: 2, semestreId: 1, disciplinaId: 2, salaId: 2, turno: 'Verspertino'}
    ])
  }
}
