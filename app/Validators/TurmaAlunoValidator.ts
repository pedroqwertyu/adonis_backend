import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaAlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    turmaId: schema.number([
      rules.exists({table: 'turma_alunos', column: 'turmaId'})
    ]),
    alunoId: schema.number([
      rules.exists({table: 'turma_alunos', column: 'alunoId'})
    ]),
  })

  public messages: CustomMessages = {}
}
