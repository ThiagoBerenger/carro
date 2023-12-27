//constantes controles

const virarChave = document.querySelector('.ligar-desligar')
const aumentarMarcha = document.querySelector('.aumentar-marcha')
const reduzirMarcha = document.querySelector('.reduzir-marcha')
const frear = document.querySelector('.frear')

//constantes painel

const motorPainel = document.querySelector('.motor')
const velocimetro = document.querySelector('.velocimetro')
const marchaPainel = document.querySelector('.marcha')

//constante carrinho

const carrinho = document.querySelector('#carrinho')

//constante mensagem

const mensagem = document.querySelector('.mensagem')


//estado inicial carro (objeto)

let carro = {
    motor: 'Desligado',
    velocidade: 0,
    marcha: 0
}


//--- ligar/desligar 

virarChave.addEventListener('click', () => {
   
    if(carro.motor === 'Desligado') {
        carro.motor = 'Ligado'
        motorPainel.innerText = carro.motor
        motorPainel.style.backgroundColor = 'green'

        mensagem.innerText = 'Brr...'

    } else {
        carro.motor = 'Desligado'
        motorPainel.innerText = carro.motor
        motorPainel.style.backgroundColor = '#ccc'
    }
})


//--- aumentar marcha

aumentarMarcha.addEventListener('click', () => {
    if(carro.motor === 'Ligado' && carro.marcha < 6) {
        carro.velocidade += 10
        carro.marcha += 1

        marchaPainel.innerText = `${carro.marcha}`
        velocimetro.innerText = `${carro.velocidade} Km`
        carrinho.style.paddingLeft = `${parseInt(carrinho.style.paddingLeft || '0') + 70}px`

        mensagem.innerText = 'Vrumm...'

    } else {
        mensagem.innerText = 'Impossível passar a marcha.'
        console.log('Impossível passar a marcha')
    }

})


//--- reduzir marcha

reduzirMarcha.addEventListener('click', () => {
    if(carro.motor === 'Ligado' && carro.marcha > 0) {
        carro.velocidade -= 10
        carro.marcha -= 1

        marchaPainel.innerText = `${carro.marcha}`
        velocimetro.innerText = `${carro.velocidade} Km`
        carrinho.style.paddingLeft = `${parseInt(carrinho.style.paddingLeft || '0') - 70}px`

        mensagem.innerText = 'Vrumm...'

    } else {
        mensagem.innerText = 'Impossível passar a marcha.'
    }
})


//--- frear 

frear.addEventListener('click', () => {
    if(carro.motor === 'ligado' || carro.velocidade > 0) {
        carro.velocidade = 0
        carro.marcha = 0

        marchaPainel.innerText = `${carro.marcha}`
        velocimetro.innerText = `${carro.velocidade} Km`
        carrinho.style.paddingLeft = '0px'

        mensagem.innerText = 'Skrr...'

    } else {
        mensagem.innerText = 'O carro já está parado.'
    }
})


// --- mensagem







