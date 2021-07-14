const livros = require('./database')

//Receber um input (S/N)
//Se for Sim, mostramos as categorias disponíveis e perguntamos qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro por categora? (S/N)')


if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('[Estilo de vida]', '[Tecnologia]','[História brasileira]','[Fantasia]','[Produtividade]')

    const entradaCategoria = readline.question('Qual categoria deseja procurar?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

