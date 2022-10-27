// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"

export default class AlunosController {
    index({ request }) {

        const {
            id,
            nome,
            cpf,
            matricula,
            email,
            telefone,
            cep,
            logradouro,
            complemento,
            bairro,
            numero
        } = request.all()

        const alunos = Aluno.query().preload('turmas').select(
            'id',
            'nome',
            'cpf',
            'matricula',
            'email',
            'telefone',
            'cep',
            'logradouro',
            'complemento',
            'numero',
            'bairro'
        )

        if (id) {
            alunos.where('id', id)
        }

        if (nome) {
            alunos.where('nome', 'like', '%' + nome + '%')
        }

        if (cpf) {
            alunos.where('cpf', 'like', cpf + '%')
        }

        if (matricula) {
            alunos.where('matricula', 'like', matricula + '%')
        }

        if (email) {
            alunos.where('email', 'like', email + '%')
        }

        if (telefone) {
            alunos.where('telefone', 'like', telefone + '%')
        }

        if (cep) {
            alunos.where('cep', 'like', cep + '%')
        }

        if (logradouro) {
            alunos.where('logradouro', 'like', '%' + logradouro + '%')
        }

        if (complemento) {
            alunos.where('complemento', 'like', '%' + complemento + '%')
        }

        if (bairro) {
            alunos.where('bairro', 'like', '%' + bairro + '%')
        }

        if (numero) {
            alunos.where('numero', numero)
        }

        return alunos

    }

    store({ request }) {

        const dados = request.only([
            'nome',
            'cpf',
            'matricula',
            'email',
            'telefone',
            'cep',
            'logradouro',
            'complemento',
            'numero',
            'bairro'
        ])

        return Aluno.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Aluno.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        return aluno.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = request.only([
            'nome',
            'cpf',
            'matricula',
            'email',
            'telefone',
            'cep',
            'logradouro',
            'complemento',
            'numero',
            'bairro'
        ])

        const aluno = await Aluno.findOrFail(id)

        aluno.merge(dados)
        return aluno.save()

    }
}
