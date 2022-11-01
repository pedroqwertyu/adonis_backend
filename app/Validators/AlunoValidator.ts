import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    cpf: schema.string.optional([
      rules.regex(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
      rules.minLength(14),
      rules.maxLength(14)
    ]),
    matricula: schema.string(),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100)
    ]),
    telefone: schema.string.optional(),
    cep: schema.number.optional(),
    logradouro: schema.string.optional(),
    complemento: schema.string.optional(),
    numero: schema.string.optional(),
    bairro: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
