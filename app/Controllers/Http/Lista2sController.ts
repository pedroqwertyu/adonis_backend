// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista2sController {
    ex1({request}) {
        const dados = request.body()
        const media = (dados.qtdMaxima * 1 + dados.qtdMinima * 1) / 2
        return {media}
    }
}
