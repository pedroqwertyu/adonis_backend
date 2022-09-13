import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: 'Frontend', cursoId: 1}, 
      {nome: 'backend', cursoId: 1}, 
      {nome: 'banco de dados', cursoId: 1}, 
      {nome: 'estrutura de dados', cursoId: 1}, 
    ])
  }
}
