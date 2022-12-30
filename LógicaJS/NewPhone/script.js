// querySelector = retorna o do indice 0
// querySelectorAll = retorna uma lista contendo todos
// console.log(phoneForm.children);

function addNewPhone(){
    const phoneForm = document.querySelector("form#phones");
    const newPhone = phoneForm.children[0].cloneNode(true);
    if(phoneForm.children[3]){
        alert("Limite atingido. Você não pode adicionar mais que 4 telefones!")
    }else{
        const phonePosition = phoneForm.children.length + 1;
        newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": ";
        phoneForm.appendChild(newPhone);
        console.log(phoneForm.children);
    }
}

function printPhones(){
    let message = "";
    const phones = document.querySelectorAll("input[name='phone']");
    phones.forEach((phone,index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n";
    })
    alert(message);
}