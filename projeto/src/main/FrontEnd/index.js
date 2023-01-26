const form = document.getElementById('form-signin')
const nome = document.getElementById('inputNome').value
const descricao =  document.getElementById('inputDescricao').value

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    cadastrar(nome, descricao)
})

function cadastrar(n, d){
    (async () =>{
        await fetch ("http://localhost:8080/servico", {
            mode:'no-cors',
            method: 'POST',
          
            body: JSON.stringify({nome: n, descricao: d})
        }).then((res) =>{console.log(res)})
  
       //const content = await rawResponse.json();
        
    })();
 
}
