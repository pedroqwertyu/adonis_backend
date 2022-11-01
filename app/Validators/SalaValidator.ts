import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SalaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    capacidade: schema.number.optional(),
    tipo: schema.enum(['S', 'L', 'A']),
  })

  public messages: CustomMessages = {}
}
