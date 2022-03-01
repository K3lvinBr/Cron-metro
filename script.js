const num3 = document.getElementById('span3')
const num2 = document.getElementById('span2')
const num1 = document.getElementById('span1')

const startId = document.getElementById('start')
const bc = document.querySelector('.bc')
const ul = document.getElementById('ul')

var interval
var i = 0
var i2 = 0
var i3 = 0
var add0
var restart = true
var limit = 0



startId.addEventListener('click', start);



function start() {

    interval = setInterval(() => {

        i++

        if (i == 60) {
            addMinutes()
        }

        if (i2 == 60) {
            addHours()
        }

        if (i < 10) {
            add0 = '0'
        } else {
            add0 = 0
        }

        num3.innerHTML = add0 + i

    }, 1000)



    startId.style.display = 'none'



    let cleanDiv = document.createElement('div')
    cleanDiv.classList.add('btm')
    cleanDiv.id = 'clean'
    cleanDiv.innerHTML = 'Limpar'
    bc.appendChild(cleanDiv)

    const cleanId = document.getElementById('clean')
    cleanId.addEventListener('click', clean);



    let stopDiv = document.createElement('div')
    stopDiv.classList.add('btm')
    stopDiv.id = 'stop'
    stopDiv.innerHTML = 'Parar'
    bc.appendChild(stopDiv)

    const stopId = document.getElementById('stop')
    stopId.addEventListener('click', stop);
}



function addMinutes() {

    i = 0
    i2++

    if (i2 < 10) {
        add0 = '0'
    } else {
        add0 = 0
    }

    num2.innerHTML = add0 + i2 + '.'

}

function addHours() {

    i2 = 0
    i3++

    if (i3 < 10) {
        add0 = '0'
    } else {
        add0 = 0
    }

    num2.innerHTML = '0' + i2 + '.'
    num1.innerHTML = add0 + i3 + '.'
}



function stop() {

    const stopId = document.getElementById('stop')

    if (restart) {
        clearInterval(interval)
        restart = false

        stopId.innerHTML = 'Retomar'

        addList()

    } else {
        interval = setInterval(() => {

            i++

            if (i == 60) {
                addMinutes()
            }

            if (i2 == 60) {
                addHours()
            }

            if (i < 10) {
                add0 = '0'
            } else {
                add0 = 0
            }

            num3.innerHTML = add0 + i

        }, 1000)

        stopId.innerHTML = 'Parar'
        restart = true
    }
}

function clean() {

    clearInterval(interval)
    i = 0
    num3.innerHTML = '0' + i
    num2.innerHTML = '0' + i + '.'
    num1.innerHTML = '0' + i + '.'
    restart = true



    const stopId = document.getElementById('stop')
    const cleanId = document.getElementById('clean')
    stopId.remove()
    cleanId.remove()

    startId.style.display = 'inline-flex'

}


function addList() {

    if (limit < 5) {

        let num = num1.innerHTML + num2.innerHTML + num3.innerHTML

        ul.innerHTML += `<li>${num}<button onclick='deleteLi(this)'>X</button></li>`

        save()

        limit++

    }

}

function deleteLi(li) {
    li.parentElement.remove()
    limit--

    save()
}

function save() {
    localStorage.setItem('save', JSON.stringify(ul.innerHTML))
}

addEventListener('load', () => {
    ul.innerHTML = JSON.parse(localStorage.getItem('save'))

    limit = document.querySelectorAll('ul li').length
})

