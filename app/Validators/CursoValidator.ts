import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.alphaNum(),
      rules.unique({ table: 'cursos', column: 'nome'})
    ]),
    duracao: schema.number.optional(),
    modalidade: schema.enum(['E', 'P', 'H']),
  })

  public messages: CustomMessages = {
    required: 'O Campo {{field}} é obrigatório',
    unique: 'O Campo {{field}} já existe um registro com o mesmo valor',
    enum: 'O Campo {{field}} só aceita registros com valores: "E", "P", "H"',
  }
}
