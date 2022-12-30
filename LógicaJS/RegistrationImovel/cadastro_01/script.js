function salvar(){
    let area = document.querySelector("input[name='area']").value
    let numero = document.querySelector("input[name='numero']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let cidade = document.querySelector("input[name='cidade']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², número " + numero + " (" + bairro + " - " + cidade + ") "
    
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "remover(this)")
    newListValue.appendChild(removeButton)
    document.getElementById("lista").appendChild(newListValue)
}

function remover(button){
    let liToremove = button.parentNode
    document.getElementById("lista").removeChild(liToremove)
}