// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {

    async index({ request }) {

        const id = request.param('id')
        const { nome, duracao, modalidade } = await request.validate(CursoValidator)

        const cursos = Curso.query().preload('disciplinas').select('id', 'nome', 'duracao', 'modalidade')

        if (id) {
            cursos.where('id', id)
        }

        if (nome) {
            cursos.where('nome', 'like', '%' + nome + '%')
        }

        if (duracao) {
            cursos.where('duracao', duracao)
        }

        if (modalidade) {
            cursos.where('modalidade', modalidade)
        }

        return cursos

    }

    async store({ request }) {

        const dados = await request.validate(CursoValidator)

        return Curso.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Curso.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        return curso.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.validade(CursoValidator)
        const curso = await Curso.findOrFail(id)

        curso.merge(dados)
        return curso.save()

    }


}
