import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AulaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    data: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss'
    }),
    conteudo: schema.string([
      rules.maxLength(150)
    ]),
    turmaId: schema.number([
      rules.exists({table: 'aulas', column: 'turma_id'})
    ]),
  })

  public messages: CustomMessages = {}
}
