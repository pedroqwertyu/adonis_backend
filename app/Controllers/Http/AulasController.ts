// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"
import AulaValidator from "App/Validators/AulaValidator"

export default class AulasController {
    index({ request }) {
        
        const id = request.param('id')
        const { data, conteudo, turmaId } = request.validade(AulaValidator)

        const aulas = Aula.query().preload('alunos').select('id', 'data', 'conteudo', 'turmaId')

        if (id) {
            aulas.where('id', id)
        }
        if (data) {
            aulas.where('data', 'like', data + '%')
        }

        if (conteudo) {
            aulas.where('conteudo', 'like', '%' + conteudo + '%')
        }

        if (turmaId) {
            aulas.where('turmaId', turmaId)
        }

        return aulas

    }

    async store({ request }) {

        const dados = await request.validade(AulaValidator)

        return Aula.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Aula.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const aula = await Aula.findOrFail(id)

        return aula.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(AulaValidator)
        const aula = await Aula.findOrFail(id)

        aula.merge(dados)
        return aula.save()

    }
}
