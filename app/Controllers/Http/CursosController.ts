// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursosController {

    index({request}){

        const {id, nome, duracao, modalidade} = request.all()

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

    store({request}){

        const dados = request.only(['nome', 'duracao', 'modalidade'])

        return Curso.create(dados)

    }

    show({request}){

        const id = request.param('id')

        return Curso.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        return curso.delete()

    }

    async update({request}){

        const id = request.param('id')
        const dados = request.only(['nome', 'duracao', 'modalidade'])
        const curso = await Curso.findOrFail(id)

        curso.merge(dados)
        return curso.save()

    }


}
