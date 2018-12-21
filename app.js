let $container = $('#container')
let $h1 = '<h1>WE DOIN MAgIC</h1>'

$container.append($h1)

let $h2 = '<h2>Novice wiZurd Sithis</h2>'
let $h3 = '<h3>You are in Gryffindor!</h3>'
let $h4 = '<h4 class="demon">Ördög the Hungarian shapeshifting demon</h4><h4>Hawthorn Wand with Dragon Heartstring Core</h4>'


$container.append($h2).append($h3).append($h4)
console.log($h2,$h3,$h4)