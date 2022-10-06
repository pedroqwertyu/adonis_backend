// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma"

export default class TurmasController {
    index() {

        return Turma.all()

    }

    store({ request }) {

        const dados = request.only([
            'nome',
            'professorId',
            'semestreId',
            'disciplinaId',
            'salaId',
            'turno'
        ])

        return Turma.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Turma.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const turma = await Turma.findOrFail(id)

        return turma.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only([
            'nome',
            'professorId',
            'semestreId',
            'disciplinaId',
            'salaId',
            'turno'
        ])
        
        const turma = await Turma.findOrFail(id)

        turma.merge(dados)
        return turma.save()

    }
}
