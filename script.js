//formulario
function solicitarOrcamento(event) {

//pegar valor dos inputs
let valorNome = document.getElementById("campo-nome").value  
let valorEmail = document.getElementById("campo-email").value  
let valorDescricao = document.getElementById("campo-texto").value  

console.log(valorNome, valorEmail, valorDescricao)
//organizar dados
let dadosForm = {
    nome: valorNome,
    email: valorEmail,
    descricao: valorDescricao
}

 //enviar a requisisicao para a api
 fetch("http://localhost:3000/solicitacoes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosForm)
 })
//htp post
//caso sucesso
.then(resposta => {
    console.log(resposta);
    //limpar
    document.querySelector("#contato form").reset()
    //mostrar alert
    alert("solicitacao enviada com sucesso!!")

})

//caso erro
.catch(erro => {
    console.log(erro);
    //mostrar alert
    alert("erro na requisicao")
})    

event.preventDefault()

}