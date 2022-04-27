const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
}

const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui

}

// const concluirTarefa = (evento) => {
//     const botaoConclui = evento.target

//     const tarefaCompleta = botaoConclui.parentElement

//     tarefaCompleta.classList.toggle('done')
// }

export default BotaoConclui
