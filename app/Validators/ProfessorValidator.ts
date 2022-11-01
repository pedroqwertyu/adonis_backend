import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfessorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha(),
      rules.maxLength(100),
      rules.unique({table: 'professors', column: 'nome'})
    ]),
    cpf: schema.string([
      rules.regex(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
      rules.unique({table: 'professors', column: 'cpf'}),
      rules.minLength(14),
      rules.maxLength(14)
    ]),
    matricula: schema.string.optional([
      rules.maxLength(20),
      rules.unique({table: 'professors', column: 'matricula'}),
    ]),
    salario: schema.string.optional([
      rules.maxLength(100)
    ]),
    email: schema.string.optional([
      rules.maxLength(100),
      rules.email()
    ]),
    telefone: schema.string.optional([
      rules.maxLength(15)
    ]),
    cep: schema.number.optional([
      rules.maxLength(8),
      rules.minLength(8)
    ]),
    logradouro: schema.string.optional([
      rules.maxLength(100)
    ]),
    complemento: schema.string.optional([
      rules.maxLength(100)
    ]),
    numero: schema.string.optional([
      rules.maxLength(20)
    ]),
    bairro: schema.string.optional([
      rules.maxLength(100)
    ]),
  })

  public messages: CustomMessages = {}
}
