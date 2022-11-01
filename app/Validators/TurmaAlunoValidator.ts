import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaAlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    turmaId: schema.string(),
    alunoId: schema.string(),
  })

  public messages: CustomMessages = {}
}
