
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

function renderizarRepositorios(nomeDoUsuario,listaRepositorio){

    const listaNomeRepositorios = listaRepositorio.map(repo => repo.nomeGitHub);

    fetch(`https://api.github.com/users/${nomeDoUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(repositorios => {
            const repositoriosSelecionados = repositorios.filter(repositorio => listaNomeRepositorios.includes(repositorio.name));

            let divDeRepositorios = document.getElementById("projetos-repositorios");

            var listaCards = "";

            repositoriosSelecionados.forEach(repositorio => {
                listaCards += criarCardRepositorio(repositorio.name, repositorio.description, repositorio.languages_url, repositorio.url);
            });
            
            divDeRepositorios.innerHTML = listaCards;
        

        })
        .catch( error => {
            console.log(error);
            console.log("Erro ao recuperar dados");
        })

}


function criarCardRepositorio(nome,descricao,tecnologiasUrl,repositorioUrl){
    //Criar o componente HTML do card
    var card = `<div class="projeto-item"><div class="projeto-item-header"><img src="./assets/images/projetos/${nome}.png" alt="Imagem do projeto: ${nome}" /> </div><div class="projeto-item-body"><h2>${nome}</h2><br/><h3>${descricao}</h3></div><div class="projeto-item-footer"><a href="${repositorioUrl}">Ver mais</a></div></div>`;
    //Recuperar as linguagens utilizadas
    //Recuperar imagem associada
    //Retornar Card com dados e lingagens>
    return card;
}

renderizarRepositorios(nomeDoUsuario,listaDadosRepositorio);