var carta1 = {
    nome: 'Charmander',
    atributos: {
        ataque: 2,
        defesa: 4,
        magia: 4,
    },
};
var carta2 = {
    nome: 'Squitle',
    atributos: {
        ataque: 8,
        defesa: 8,
        magia: 8,
    },
};
var carta3 = {
    nome: 'Bulbassaur',
    atributos: {
        ataque: 4,
        defesa: 7,
        magia: 2,
    },
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var indiceMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[indiceMaquina];

    var indiceJogador = parseInt(Math.random() * 3);
    while (indiceMaquina == indiceJogador) {
        indiceJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[indiceJogador];

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTextos = '';

    for (var atributo in cartaJogador.atributos) {
        opcoesTextos +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo;
    }
    opcoes.innerHTML = opcoesTextos;
}
function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName('atributo');

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}
function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById('resultado');
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = 'Você venceu!';
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = 'Você perdeu!';
    } else {
        elementoResultado.innerHTML = 'Empatou!';
    }
    document.getElementById('btnSortear').disabled = false;
    document.getElementById('btnJogar').disabled = true;
}
