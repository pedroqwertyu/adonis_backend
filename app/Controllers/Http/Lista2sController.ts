// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista2sController {
    ex1({request}) {
        const dados = request.body()
        const media = (dados.qtdMaxima * 1 + dados.qtdMinima * 1) / 2
        return {media}
    }

    ex2({request}) {
        const dados = request.body()
        const salario = dados.totalHoras * dados.salarioHora
        const nome = dados.nomeFuncionario
        const salarioBruto = salario * 1 + (salario * (dados.numFilhos * 0.03))
        return {nome, salarioBruto}
    }

    ex3({request}) {
        const dados = request.body().anos

        return dados
    }
}
