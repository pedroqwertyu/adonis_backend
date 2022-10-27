// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno"

export default class TurmaAlunosController {
    index({ request }) {

        const { id, turmaId, alunoId } = request.all()

        const turmaAlunos = TurmaAluno.query().select('id', 'turmaId', 'alunoId')

        if (id) {
            turmaAlunos.where('id', id)
        }

        if (turmaId) {
            turmaAlunos.where('turmaId', 'like', '%' + turmaId + '%')
        }

        if (alunoId) {
            turmaAlunos.where('alunoId', alunoId)
        }

        return turmaAlunos

    }

    store({ request }) {

        const dados = request.only(['turmaId', 'alunoId'])

        return TurmaAluno.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return TurmaAluno.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const turmaAluno = await TurmaAluno.findOrFail(id)

        return turmaAluno.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only(['turmaId', 'alunoId'])
        const turmaAluno = await TurmaAluno.findOrFail(id)

        turmaAluno.merge(dados)
        return turmaAluno.save()

    }
}
