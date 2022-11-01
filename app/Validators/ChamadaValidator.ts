import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChamadaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    aulaId: schema.number(),
    alunoId: schema.number(),
    presenca: schema.enum(['P', 'F']),
  })

  public messages: CustomMessages = {}
}
