import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Disciplina from './Disciplina'
import Sala from './Sala'
import Semestre from './Semestre'
import Professor from './Professor'
import Aula from './Aula'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public professorId: number

  @column()
  public semestreId: number
  
  @column()
  public disciplinaId: number

  @column()
  public salaId: number

  @column()
  public turno: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=> Disciplina )
    public disciplina: BelongsTo<typeof Disciplina>

  @belongsTo( ()=> Sala )
    public sala: BelongsTo<typeof Sala>

  @belongsTo( ()=> Semestre )
    public semestre: BelongsTo<typeof Semestre>

  @belongsTo( ()=> Professor )
    public professor: BelongsTo<typeof Professor>
  
  @belongsTo( ()=> Aula )
    public aula: BelongsTo<typeof Aula>
}
