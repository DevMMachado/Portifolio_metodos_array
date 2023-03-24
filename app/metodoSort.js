let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    let livrosOrdenados = livrosDisponiveis.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}
