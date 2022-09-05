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
        const dados = request.body()
        const anosDias = dados.anos * 365
        const mesesDias = dados.anos * 30
        const diasTotais = anosDias + mesesDias + dados.dias * 1

        return {diasTotais}
    }
    
    ex5({request}) {
        const dados = request.body()
        const media = (dados.n1 * 2 + dados.n2 * 3 + dados.n3 * 5) / 10 
        
        return {media}
    }

    ex7({request}) {
        const dados = request.body()
        const percTotal = dados.totalVendas* 1 + (dados.totalVendas * (dados.percVendas / 100))
        const nome = dados.nome
        const salarioBruto = dados.salario* 1 + percTotal

        return {nome, salarioBruto}
    }

    ex8({request}) {
        const dados = request.body()
        const nome = dados.nome
        const vMedia = dados.km / dados.horas
        const resposta = `A velocidade média do ${nome} foi ${vMedia} km/h.`

        return {resposta}
    }

    ex9({request}) {
        const dados = request.body()
        const aumento = dados.salario* 1 + (dados.salario * 0.30)

        if (dados.salario < 1000) {
            const resposta = {aumento}
            return resposta
        } else {
            const resposta = {mensagem: "não tem direito ao aumento."}
            return resposta
        }
    }
}
