const deletarTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(id, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
}

const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return botaoDeleta
}

// const deletarTarefa = (evento) => { 
//     const botaoDeleta = evento.target
    
//     const tarefaCompleta = botaoDeleta.parentElement

//     tarefaCompleta.remove()

//     return botaoDeleta

// }

export default BotaoDeleta