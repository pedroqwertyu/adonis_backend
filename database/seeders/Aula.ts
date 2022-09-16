import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
      {data: 21315004, conteudo: 'conteudo massa (do orion)', turmaId: 1},
      {data: 22315004, conteudo: 'conteudo massa do daniel (mentira)', turmaId: 2}
    ])
  }
}
