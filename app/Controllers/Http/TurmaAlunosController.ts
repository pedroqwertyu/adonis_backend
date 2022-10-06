// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno"

export default class TurmaAlunosController {
    index(){

        return TurmaAluno.all()

    }

    store({request}){

        const dados = request.only(['turmaId', 'alunoId'])

        return TurmaAluno.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return TurmaAluno.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const turmaAluno = await TurmaAluno.findOrFail(id)

        return turmaAluno.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['turmaId', 'alunoId'])
        const turmaAluno = await TurmaAluno.findOrFail(id)

        turmaAluno.merge(dados)
        return turmaAluno.save()

    }
}
