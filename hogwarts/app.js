
let $container = $('#container')

let $h1 = '<h1>Hogwarts</h1>'
let $h2 = '<h2>Jamal Amar</h2>'
let $h3 = '<h3>Slytherin</h3>'
let $h4 = '<h4>Panki</h4>'
let $h5 = '<h4>silver</h4>'

console.log($container)


$('#container')
.append($h1)
.append($h2)
.append($h3)
.append($h4)
.append($h5)

$('h4:first-of-type').addClass("dog")