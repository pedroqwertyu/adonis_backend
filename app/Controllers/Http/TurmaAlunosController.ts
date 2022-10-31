// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno"
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator"

export default class TurmaAlunosController {
    async index({ request }) {

        const id = request.param('id')
        const { turmaId, alunoId } = await request.validade(TurmaAlunoValidator)

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

    async store({ request }) {

        const dados = await request.validade(TurmaAlunoValidator)

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
        const dados = await request.validade(TurmaAlunoValidator)
        const turmaAluno = await TurmaAluno.findOrFail(id)

        turmaAluno.merge(dados)
        return turmaAluno.save()

    }
}
