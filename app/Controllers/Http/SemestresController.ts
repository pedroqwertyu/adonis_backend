// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre"
import SemestreValidator from "App/Validators/SemestreValidator"

export default class SemestresController {
    async index({ request }) {

        const id = request.param('id')
        const { nome, dataFim, dataInicio } = await request.validade(SemestreValidator)

        const semestres = Semestre.query().preload('turmas').select('id', 'nome', 'dataInicio', 'dataFim')

        if (id) {
            semestres.where('id', id)
        }

        if (nome) {
            semestres.where('nome', 'like', '%' + nome + '%')
        }

        if (dataInicio) {
            semestres.where('dataInicio', 'like', '%' + dataInicio + '%')
        }

        if (dataFim) {
            semestres.where('dataFim', 'like', '%' + dataFim + '%')
        }

        return semestres

    }

    async store({ request }) {

        const dados = await request.validade(SemestreValidator)

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
        const dados = await request.validade(SemestreValidator)
        const semestre = await Semestre.findOrFail(id)

        semestre.merge(dados)
        return semestre.save()

    }
}
