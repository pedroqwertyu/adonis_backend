// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre"

export default class SemestresController {
    index({ request }) {

        const { id, nome } = request.all()

        const semestres = Semestre.query().preload('turmas').select('id', 'nome', 'dataInicio', 'dataFim')

        if (id) {
            semestres.where('id', id)
        }

        if (nome) {
            semestres.where('nome', 'like', '%' + nome + '%')
        }

        return semestres

    }

    store({ request }) {

        const dados = request.only(['nome', 'dataInicio', 'dataFim'])

        return Semestre.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Semestre.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)

        return semestre.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only(['nome', 'dataInicio', 'dataFim'])
        const semestre = await Semestre.findOrFail(id)

        semestre.merge(dados)
        return semestre.save()

    }
}
