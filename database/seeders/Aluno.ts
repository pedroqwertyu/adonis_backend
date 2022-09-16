import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: 'josezinho', cpf: 734534, matricula: '482124418489'},
      {nome: 'paulinho', cpf: 738573, matricula: '482394523489'},
      {nome: 'felipinho', cpf: 734085, matricula: '4873454238489'},
      {nome: 'jefersonzinho', cpf: 774396, matricula: '48856238489'},
      {nome: 'janielsonzinho', cpf: 946345, matricula: '48239463469'},
    ])
  }
}
