// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada"

export default class ChamadasController {
    index({ request }) {

        const { id, aulaId, alunoId, presenca } = request.all()

        const chamadas = Chamada.query().select('id', 'aulaId', 'alunoId', 'presenca')

        if (id) {
            chamadas.where('id', id)
        }

        if (aulaId) {
            chamadas.where('aulaId', aulaId)
        }

        if (alunoId) {
            chamadas.where('alunoId', alunoId)
        }

        if (presenca) {
            chamadas.where('presenca', presenca)
        }

        return chamadas

    }

    store({ request }) {

        const dados = request.only(['aulaId', 'alunoId', 'presenca'])

        return Chamada.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Chamada.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)

        return chamada.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only(['aulaId', 'alunoId', 'presenca'])
        const chamada = await Chamada.findOrFail(id)

        chamada.merge(dados)
        return chamada.save()

    }
}
