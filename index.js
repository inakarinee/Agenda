function cadastro (){
    let cadastro = {"usuario" : document.getElementById("nome").value,
    "senha" : document.getElementById("senha").value,
    "matricula" : document.getElementById("matricula").value,
    "email" : document.getElementById("email").value,
    "area" : document.getElementById("area").value,
    "cargahoraria" : document.getElementById("cargahoraria").value}


    for(i in cadastro){
        localStorage[i]=cadastro[i]
    }

    window.location.href = 'cadastro.html'
}


