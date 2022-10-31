// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class DisciplinasController {

    async index({ request }) {

        const id = request.param('id')
        const { cursoId, nome } = await request.validade(DisciplinaValidator)

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

    async store({ request }) {

        const dados = await request.validade(DisciplinaValidator)

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
        const dados = await request.validade(DisciplinaValidator)
        const disciplina = await Disciplina.findOrFail(id)

        disciplina.merge(dados)
        return disciplina.save()

    }

}
