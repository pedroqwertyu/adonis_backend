import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: "semestre 1", dataInicio: new Date (20223002), dataFim: new Date (20221509)},
      {nome: "semestre 2", dataInicio: new Date (20231102), dataFim: new Date (20231509)},
    ])
  }
}
