import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {
        nome: 'pedro', 
        cpf: 5131351, 
        matricula: '616177577', 
        salario: 'R$ 9.000,00',
        email: 'pedro@gmail.com',
        telefone: '55 61 99999-9999',
        cep: 15125,
      },
      {
        nome: 'julia', 
        cpf: 5131351, 
        matricula: '616947177', 
        salario: 'R$ 15.000,00',
        email: 'julia@gmail.com',
        telefone: '55 61 99999-9999',
        cep: 15125,
      },
      {
        nome: 'lucas', 
        cpf: 5131351, 
        matricula: '616177492', 
        salario: 'R$ 7.000,00',
        email: 'julia@gmail.com',
        telefone: '55 61 99999-9999',
        cep: 15125,
      }
    ])
  }
}
