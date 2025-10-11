

let tarefas = []
let tarefa = document.querySelector('.input-tarefa')
let mensagem = document.querySelector('.mensagem')
let mostarTarefas = document.querySelector('.mostrar-tarefas')
let ul = document.querySelector('ul')

function adicionarTarefa() {
    if(tarefa.value.length === 0){
       mensagem.style.display = 'block'
       mensagem.innerHTML = 'Nenhuma tarefa digitada'
       mensagem.style.animation = 'mensagem  2s ease-in-out ' 
       setTimeout(()=>{
        mensagem.style.display = 'none'
       }, 3000)
    }else if(tarefa.value.length >= 30){
       mensagem.innerHTML = 'Texto muito longo '
       mensagem.style.display = 'block'
       mensagem.style.animation = 'mensagem  2s ease-in-out ' 
       setTimeout(()=>{
        mensagem.style.display = 'none'
        mensagem.style.animation = ''
       }, 3000)
    }else{
    tarefas.push(tarefa.value)
    
    const novaTarefa  = document.createElement ('li')
    novaTarefa.textContent = tarefa.value 

    const img1 = document.createElement('img')
    img1.src = 'img/delete_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.png'
    img1.alt = 'Excluir'
    img1.style.width = '16px' 
    img1.style.cursor = 'pointer'
    img1.style.position = 'absolute'
    img1.style.right = '110px'
    img1.onclick = function(){
      novaTarefa.remove()
    }
    const img2 = document.createElement('img')
    const tarefaEdit = document.createElement('input')
    const buttonEdit = document.querySelector('.buttonEdit')
    tarefaEdit.style.display = 'none'
   
    img2.src = 'img/edit_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.png'
    img2.alt = 'Editar'
    img2.style.width = '16px' 
    img2.style.cursor = 'pointer'
    img2.style.position = 'absolute'
    img2.style.right = '80px'
    img2.onclick = function(){
      tarefaEdit.style.display = 'block'
      tarefaEdit.value = novaTarefa.textContent
      tarefaEdit.focus()
      novaTarefa.style.display = 'none'
      buttonEdit.style.display = 'block'
      
      buttonEdit.onclick = function () {
        novaTarefa.textContent = tarefaEdit.value
        tarefaEdit.style.display = 'none'
        buttonEdit.style.display = 'none'
        novaTarefa.style.display = 'block'
        img1.style.display = 'block'
        img2.style.display = 'block'
       
      }
      }
    

    

   


    novaTarefa.appendChild(img1)
    novaTarefa.appendChild(img2)
    ul.appendChild(tarefaEdit)
    ul.appendChild(buttonEdit)
    mostarTarefas.appendChild(novaTarefa)

    tarefa.value = ''
    }
  }


