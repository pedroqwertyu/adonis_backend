import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChamadaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    aulaId: schema.number([
      rules.exists({table: 'chamadas', column: 'aula_id'})
    ]),
    alunoId: schema.number([
      rules.exists({table: 'chamadas', column: 'aluno_id'})
    ]),
    presenca: schema.enum(['P', 'F']),
  })

  public messages: CustomMessages = {}
}
