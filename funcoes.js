var listaFilmes = ["https://limaomecanico.com.br/wp-content/uploads/2019/07/homem-aranha-2.jpg", "https://hqrock.files.wordpress.com/2011/06/poster-capitao-31mai2011.jpg", "https://static.wikia.nocookie.net/marvel/images/0/0c/Homem_de_Ferro_2_p%C3%B4ster.jpg/revision/latest?cb=20170809144405&path-prefix=pt-br"]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}