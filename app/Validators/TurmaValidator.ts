import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alphaNum(),
      rules.unique({table: 'turmas', column: 'nome'}),
      rules.maxLength(50)
    ]),
    professorId: schema.number([
      rules.exists({table: 'turmas', column: 'professor_id'}),
    ]),
    semestreId: schema.number([
      rules.exists({table: 'turmas', column: 'semestre_id'}),
    ]),
    disciplinaId: schema.number([
      rules.exists({table: 'turmas', column: 'disciplina_id'}),
    ]),
    salaId: schema.number([
      rules.exists({table: 'turmas', column: 'sala_id'}),
    ]),
    turno: schema.enum(['M', 'V', 'N']),
  })

  public messages: CustomMessages = {}
}
