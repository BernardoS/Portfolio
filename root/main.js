
const listaDadosRepositorio = [
    {
        "nomeGitHub":"BookList",
        "nomePortfolio":"BookList",
        "descricaoPortfolio":"",
        "tecnologiasAdicionais":[""]
    },
    {
        "nomeGitHub":"Ground-Mesher",
        "nomePortfolio":"Ground-Mesher",
        "descricaoPortfolio":"",
        "tecnologiasAdicionais":[""]
    },{
        "nomeGitHub":"MasterLock-Site-Code",
        "nomePortfolio":"MasterLock",
        "descricaoPortfolio":"",
        "tecnologiasAdicionais":[""]
    }
]
    
const nomeDoUsuario = "bernardos";

function recuperarRepositorios(nomeDoUsuario,listaRepositorio){

    const listaNomeRepositorios = listaRepositorio.map(repo => repo.nomeGitHub);

    fetch(`https://api.github.com/users/${nomeDoUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(repositorios => {
            const repositoriosSelecionados = repositorios.filter(repository => listaNomeRepositorios.includes(repository.name));
            criarCardRepositorio(repositoriosSelecionados.name,repositoriosSelecionados.description,repositoriosSelecionados.languages_url);
        })
        .catch( error => {
            console.log(error);
            console.log("Erro ao recuperar dados");
        })

}


function criarCardRepositorio(nome,descricao,tecnologiasUrl){
    //Criar o componente HTML do card
    //Recuperar as linguagens utilizadas
    //Recuperar imagem associada
    //Retornar Card com dados e lingagens
}

recuperarRepositorios(nomeDoUsuario,listaDadosRepositorio);