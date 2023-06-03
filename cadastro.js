let contador = 0
let atividades = [];
const contadorElement = document.getElementById("contador")

function cadastro_tarefas(){
    let atividade = document.getElementById("atividade").value;
    let siape = document.getElementById("siape");
    let dia = document.getElementById("dia");
    let carga_horaria = document.getElementById("carga").value;
    let horario_inicial = document.getElementById("horario_inicial").value;
    let horario_final = document.getElementById("horario_final").value;

    // const horas_finais = []
    // for(let i = 0; i <= carga_horaria; horas_finais++)
    // horas_finais.push{
        lista_de_atividades(atividade);
        horas(horario_inicial, horario_final, carga_horaria);

    }

    function lista_de_atividades(atividade) {
        atividades.push(atividade);
        console.log(atividades)
    }

    function horas(horario_inicial, horario_final, carga_horaria) {
        contador += parseFloat(horario_final) - parseFloat(horario_inicial);
        if (contador >= carga_horaria){
            alert("Vc já concluiu sua carga horária")
            contadorElement.innerHTML = `${carga_horaria}/${carga_horaria}`
        }
        else{
            contadorElement.innerHTML = `${contador}/${carga_horaria}`
        }
    }


//     if (cadastro.usuario == nome_docente)
//         for (let carga = 0; carga < carga_horaria; carga += horas){
//             var horas = horario_final - horario_inicial
//             soma += horas  
//         };

//     if (horario == horario && dia == dia){
//         alert("Este horário já está preenchido")}
// }


