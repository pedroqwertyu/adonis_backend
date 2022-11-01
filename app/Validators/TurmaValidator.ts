import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(

    ),
    professorId: schema.number(),
    semestreId: schema.number(),
    disciplinaId: schema.number(),
    salaId: schema.number(),
    turno: schema.enum(['M', 'V', 'N']),
  })

  public messages: CustomMessages = {}
}
