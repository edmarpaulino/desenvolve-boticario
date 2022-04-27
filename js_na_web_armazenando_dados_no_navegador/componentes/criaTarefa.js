import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (evento) => {
    evento.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')
    const horario = data.format('HH:mm')
    const concluida = false
    
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const tarefasAtualizadas = [...tarefas, dados]
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "
    carregaTarefa();

}

export const Tarefa = ({ valor, horario, concluida }, id) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    if (concluida) {
        tarefa.classList.add('done')
    }
    const conteudo = `<p class="content">${horario} ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))
    return tarefa
}
