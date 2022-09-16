import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: 'B1001', capacidade: 40, tipo: 'GG'},
      {nome: 'A902', capacidade: 40, tipo: 'P'},
    ])
  }
}
