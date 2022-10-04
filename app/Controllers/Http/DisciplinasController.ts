// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {

    index(){

        return Disciplina.all()

    }

    store({request}){

        const dados = request.only(['nome', 'cursoId'])

        return Disciplina.create(dados)
        
    }

    show({request}){

        const id = request.param('id')

        return Disciplina.findOrFail(id)

    }

    async destroy({request}){

        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)

        return disciplina.delete()

    }

    async update({request}){

        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)

        return disciplina.save()

    }

}
