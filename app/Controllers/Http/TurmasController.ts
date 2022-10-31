// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma"
import TurmaValidator from "App/Validators/TurmaValidator"

export default class TurmasController {
    async index({ request }) {
        const id = request.param('id')
        const { nome, professorId, semestreId, disciplinaId, salaId, turno } = await request.validade(TurmaValidator)

        const turmas = Turma.query().preload('aulas').select(
            'id',
            'nome',
            'professorId',
            'semestreId',
            'disciplinaId',
            'salaId',
            'turno'
        )

        if (id) {
            turmas.where('id', id)
        }

        if (nome) {
            turmas.where('nome', 'like', '%' + nome + '%')
        }

        if (professorId) {
            turmas.where('professorId', professorId)
        }

        if (semestreId) {
            turmas.where('semestreId', semestreId)
        }

        if (disciplinaId) {
            turmas.where('disciplinaId', disciplinaId)
        }

        if (salaId) {
            turmas.where('salaId', salaId)
        }

        if (turno) {
            turmas.where('turno', turno)
        }

        return turmas

    }

    async store({ request }) {

        const dados = await request.validade(TurmaValidator)

        return Turma.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Turma.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const turma = await Turma.findOrFail(id)

        return turma.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(TurmaValidator)

        const turma = await Turma.findOrFail(id)

        turma.merge(dados)
        return turma.save()

    }
}
