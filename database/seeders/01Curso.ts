import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'ADS', duracao: 5, modalidade: 'P'},
      {nome: 'ADM', duracao: 6, modalidade: 'E'},
      {nome: 'Psicologia', duracao: 7, modalidade: 'P'},
      {nome: 'Direito', duracao: 8, modalidade: 'P'},
      {nome: 'Pedagogia', duracao: 10, modalidade: 'E'},
      {nome: 'Historia', duracao: 12, modalidade: 'P'},
      {nome: 'Enfermagem', duracao: 4, modalidade: 'P'},
    ])
  }
}
