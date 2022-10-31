// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor"
import ProfessorValidator from "App/Validators/ProfessorValidator"

export default class ProfessorsController {
    async index({ request }) {

        const id = request.param('id')
        const {
            nome, 
            cpf, 
            matricula, 
            salario, 
            email, 
            telefone, 
            cep, 
            logradouro, 
            complemento, 
            bairro, 
            numero 
        } = await request.validade(ProfessorValidator)

        const professors = Professor.query().preload('turmas').select(
            'id',
            'nome',
            'cpf',
            'matricula',
            'salario',
            'email',
            'telefone',
            'cep',
            'logradouro',
            'complemento',
            'numero',
            'bairro'
        )

        if (id) {
            professors.where('id', id)
        }

        if (nome) {
            professors.where('nome', 'like', '%' + nome + '%')
        }

        if (cpf) {
            professors.where('cpf', 'like', cpf + '%')
        }

        if (matricula) {
            professors.where('matricula', 'like', matricula + '%')
        }

        if (salario) {
            professors.where('salario', 'like', '%' + salario + '%')
        }

        if (email) {
            professors.where('email', 'like', email + '%')
        }

        if (telefone) {
            professors.where('telefone', 'like', telefone + '%')
        }

        if (cep) {
            professors.where('cep', 'like', cep + '%')
        }

        if (logradouro) {
            professors.where('logradouro', 'like', '%' + logradouro + '%')
        }

        if (complemento) {
            professors.where('complemento', 'like', '%' + complemento + '%')
        }

        if (bairro) {
            professors.where('bairro', 'like', '%' + bairro + '%')
        }

        if (numero) {
            professors.where('numero', numero)
        }

        return professors

    }

    async store({ request }) {

        const dados = await request.validade(ProfessorValidator)

        return Professor.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Professor.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const professor = await Professor.findOrFail(id)

        return professor.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(ProfessorValidator)

        const professor = await Professor.findOrFail(id)

        professor.merge(dados)
        return professor.save()

    }
}
