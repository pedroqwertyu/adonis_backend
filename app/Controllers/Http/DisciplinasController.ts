// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {

    index({ request }) {

        const { cursoId, id, nome } = request.all()

        const disciplinas = Disciplina.query().preload('curso').select('id', 'nome', 'cursoId')

        if (cursoId) {
            disciplinas.where('cursoId', cursoId)
        }

        if (id) {
            disciplinas.where('id', id)
        }

        if (nome) {
            disciplinas.where('nome', 'like', '%' + nome + '%')
        }
        
        return disciplinas
    }

    store({ request }) {

        const dados = request.only(['nome', 'cursoId'])

        return Disciplina.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Disciplina.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)

        return disciplina.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only(['nome', 'cursoId'])
        const disciplina = await Disciplina.findOrFail(id)

        disciplina.merge(dados)
        return disciplina.save()

    }

}
