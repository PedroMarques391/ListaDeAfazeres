const container = document.querySelector('.container');
const listaAtividades = document.querySelector('.lista_atividades');
const caixa = document.querySelector('.caixa');
const input = document.querySelector('.input');
const erro = document.querySelector('.erro');
const botaoCadastra = document.querySelector('.botao_adc');
const DarkMode = document.querySelector('#DarkMode');
const PinkMode = document.querySelector('#PinkMode');
const LightMode = document.querySelector('#LightMode');
const deletarTudo = document.querySelector('.botao_del_todos');

DarkMode.addEventListener('click', () => definePaletaCor('#000', '#010048', '#4c4c4c', '#ffffff', '#acacac'));

PinkMode.addEventListener('click', () => definePaletaCor('#eacdcd', '#f9f1f1', '#e2bbbb', '#eacdcd', '#eacdcd'));

LightMode.addEventListener('click', () => definePaletaCor('#faf0e6', '#fff0db', '#eed9c4', '#fff', '#faf0e6'));


botaoCadastra.addEventListener('click', () => cadastraAtividade());

deletarTudo.addEventListener('click', () => removeAtividades());

function criaAtividade() {
    const atividade = document.createElement('div');

    atividade.classList.add('atividade');
    const nomeAtividade = document.createElement('p');
    nomeAtividade.classList.add('main')
    const upper = input.value;;
    nomeAtividade.textContent = upper.toUpperCase();
    const botaoLimpar = document.createElement('button');
    botaoLimpar.textContent = 'Limpar';
    botaoLimpar.classList.add('botao_del');
    botaoLimpar.addEventListener('click', () => remove(atividade));
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);

}

function cadastraAtividade(){
    if(input.value.length > 3 && input.value.length <= 36){
        erro.style.display = "none";
        criaAtividade();
    }else{
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput(){
    input.value = "";
};

function definePaletaCor(cor, letras, fundoCaixa, inputFundo, listaAtividadesFundo) {
    container.style.background = cor;
    container.style.color = letras;
    caixa.style.background = fundoCaixa;
    listaAtividades.style.background = listaAtividadesFundo;
    input.style.background = inputFundo;
    
};

function removeAtividades () {
    while (listaAtividades.firstElementChild) {
        listaAtividades.removeChild(listaAtividades.firstElementChild);
    };
};

function remove (atividade) {
    listaAtividades.removeChild(atividade);
};

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});