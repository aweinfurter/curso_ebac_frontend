const form = document.getElementById('form-numbers')
const numberA = document.getElementById('number-a')
const numberB = document.getElementById('number-b')
const containerPositive = document.querySelector('.result-msg')


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const positivemsg = `O número B (<b>${numberB.value}</b>) é maior que o número A (<b>${numberA.value}</b>)`
    const negativemsg = `O número B (<b>${numberB.value}</b>) NÃO é maior que o número A (<b>${numberA.value}</b>)`

    if (numberB.value > numberA.value) {
        containerPositive.innerHTML = positivemsg
        containerPositive.style.display = 'block'

        numberA.value = ''
        numberB.value = ''
        
    } else {
        containerPositive.innerHTML = negativemsg
        containerPositive.style.display = 'block'
        containerPositive.style.background = 'red'
    }
})