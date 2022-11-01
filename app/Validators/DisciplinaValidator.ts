import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DisciplinaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([
      rules.maxLength(50),
      rules.alphaNum(),
      rules.unique({ table: 'disciplinas', column: 'nome'})
    ]),
    cursoId: schema.number([
      rules.exists({table: 'disciplinas', column: 'cursoId'})
    ]),
  })

  public messages: CustomMessages = {}
}
