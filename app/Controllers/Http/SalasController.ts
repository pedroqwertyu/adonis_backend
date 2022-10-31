// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala"
import SalaValidator from "App/Validators/SalaValidator"

export default class SalasController {
    async index({ request }) {

        const id = request.param('id')
        const { nome, capacidade, tipo } = await request.validade(SalaValidator)

        const salas = Sala.query().preload('turmas').select('id', 'nome', 'capacidade', 'tipo')

        if (id) {
            salas.where('id', id)
        }

        if (nome) {
            salas.where('nome', 'like', '%' + nome + '%')
        }

        if (capacidade) {
            salas.where('capacidade', 'like', '%' + capacidade + '%')
        }

        if (tipo) {
            salas.where('tipo', tipo)
        }

        return salas

    }

    async store({ request }) {

        const dados = await request.validade(SalaValidator)

        return Sala.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Sala.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const sala = await Sala.findOrFail(id)

        return sala.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(SalaValidator)
        const sala = await Sala.findOrFail(id)

        sala.merge(dados)
        return sala.save()

    }
}
