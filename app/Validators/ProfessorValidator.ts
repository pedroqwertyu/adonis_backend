import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfessorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    cpf: schema.string([
      rules.regex(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
    ]),
    matricula: schema.string.optional(),
    salario: schema.string.optional(),
    email: schema.string.optional([
      rules.email()
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
