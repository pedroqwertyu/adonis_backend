// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada"
import ChamadaValidator from "App/Validators/ChamadaValidator"

export default class ChamadasController {
    async index({ request }) {
        const id = request.param('id')
        const { aulaId, alunoId, presenca } = await request.validade(ChamadaValidator)

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

    async store({ request }) {

        const dados = await request.validade(ChamadaValidator)

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
        const dados = await request.validade(ChamadaValidator)
        const chamada = await Chamada.findOrFail(id)

        chamada.merge(dados)
        return chamada.save()

    }
}
