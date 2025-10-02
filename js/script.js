let tarefas = []
let tarefa = document.querySelector('.input-tarefa')
let mensagem = document.querySelector('.mensagem')
let mostarTarefas = document.querySelector('.mostrar-tarefas')

function adicionarTarefa() {
    if(tarefa.value.length === 0){
       mensagem.style.display = 'block'
       mensagem.innerHTML = 'Nenhuma tarefa digitada'
       mensagem.style.animation = 'mensagem  2s ease-in-out ' 
       setTimeout(()=>{
        mensagem.style.display = 'none'
       }, 3000)
    }else{
    tarefas.push(tarefa.value)
    
    const novaTarefa  = document.createElement ('li')
    novaTarefa.textContent = tarefa.value
    mostarTarefas.appendChild(novaTarefa)
    novaTarefa.style.background = '#ffffffdc'
    

    tarefa.value = ''
 }

}