import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: "semestre 1", dataInicio: 30022022, dataFim: 15092022},
      {nome: "semestre 2", dataInicio: 11022023, dataFim: 15092023},
    ])
  }
}
