let contador = 0
let atividades = [];
let horarios = [];
let contadorElement = document.getElementById("contador");

// function exibirlista() {
//     let exibir = document.getElementById("tarefas")
//     for (item in lista (atividades)){
//         itemLista = document.createElement("p")
//         itemLista.innerHTML = itemdiv.appendChild(itemLista)
// }
// }

function cadastro_tarefas(){
    let atividade = document.getElementById("atividade").value;
    let siape = document.getElementById("siape");
    let dia = document.getElementById("dia");
    let carga_horaria = document.getElementById("carga").value;
    let horario_inicial = document.getElementById("horario_inicial").value.split(":");
    let horario_final = document.getElementById("horario_final").value.split(":");

    let horario_inicial_min = (Number(horario_inicial[0] * [60])) + Number(horario_inicial[1]) ;
    let horario_final_min = (Number(horario_final[0] * [60])) + Number(horario_final[1]) ;
    let carga_min = (Number(carga_horaria[0] * 60)) + Number(carga_horaria[1]);

        lista_de_atividades(atividade);
        horas(horario_inicial_min, horario_final_min, carga_horaria, carga_min);
        horario(horario_inicial, horario_final);
        // exibirlista(atividades)

    }

    function horario(horario_inicial, horario_final){
        horarios.push(horario_inicial, horario_final)
        document.querySelector("#horario").innerHTML = horarios;
    }

    function lista_de_atividades(atividade) {
        atividades.push(atividade);
        console.log(atividades)
        document.querySelector("#tarefa").innerHTML = atividades;
}

    function horas(horario_inicial_min, horario_final_min, carga_horaria, carga_min) {
        contador += parseFloat(horario_final_min) - parseFloat(horario_inicial_min);
        let contador_hora = contador / 60
        if (contador >= carga_min){
            alert("Você já concluiu sua carga horária")
            contadorElement.innerHTML = `${carga_horaria}/${carga_horaria}`;
        }
        else{
            contadorElement.innerHTML = `${contador_hora}/${carga_horaria}`
        }
    }


//     if (horario == horario && dia == dia){
//         alert("Este horário já está preenchido")}
// }


    


//     if (cadastro.usuario == nome_docente)
//         for (let carga = 0; carga < carga_horaria; carga += horas){
//             var horas = horario_final - horario_inicial
//             soma += horas  
//         };

//     if (horario == horario && dia == dia){
//         alert("Este horário já está preenchido")}
// }





