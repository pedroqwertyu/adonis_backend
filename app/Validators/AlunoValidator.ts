import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha(),
      rules.maxLength(100),
      rules.unique({table: 'alunos', column: 'nome'})
    ]),
    cpf: schema.string.optional([
      rules.regex(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
      rules.unique({table: 'alunos', column: 'cpf'}),
      rules.minLength(14),
      rules.maxLength(14)
    ]),
    matricula: schema.string([
      rules.maxLength(20),
      rules.unique({table: 'alunos', column: 'matricula'}),
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100)
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
