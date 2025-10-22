
let tarefas = []
let tarefa = document.querySelector('.input-tarefa')
let mensagem = document.querySelector('.mensagem')
let mostarTarefas = document.querySelector('.mostrar-tarefas')
let ul = document.querySelector('ul')

function adicionarTarefa() {
  if (tarefa.value.length === 0) {
    mensagem.style.display = 'block'
    mensagem.innerHTML = 'Nenhuma tarefa digitada'
    mensagem.style.animation = 'mensagem  2s ease-in-out '
    setTimeout(() => {
      mensagem.style.display = 'none'
    }, 3000)
  } else if (tarefa.value.length >= 30) {
    mensagem.innerHTML = 'Texto muito longo '
    mensagem.style.display = 'block'
    mensagem.style.animation = 'mensagem  2s ease-in-out '
    setTimeout(() => {
      mensagem.style.display = 'none'
      mensagem.style.animation = ''
    }, 3000)
  } else {
    tarefas.push(tarefa.value)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    const novaTarefa = document.createElement('li')
    novaTarefa.textContent = tarefa.value

    const valorTarefa = tarefa.value
    const img1 = document.createElement('img')
    img1.src = 'img/delete_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.png'
    img1.alt = 'Excluir'
    img1.style.width = '16px'
    img1.style.cursor = 'pointer'
    img1.onclick = function () {
      mostarTarefas.removeChild(novaTarefa)
      const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || []
      const novaLista = tarefasSalvas.filter(t => t !== valorTarefa)
      localStorage.setItem('tarefas', JSON.stringify(novaLista))
      tarefas = []
      tarefa.value = ''
     
    }
    novaTarefa.appendChild(img1)
    mostarTarefas.appendChild(novaTarefa)

    tarefa.value = ''
  }


}


