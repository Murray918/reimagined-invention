
let container = $('#container')
let $h1 = '<h1>Hogwarts</h1>'

let $h2 = '<h2> Andrew </h2>'
let $h3 = '<h3> Ravenclaw </h3>'
let $h4 = '<h4 class="dog"> Mack </h4><h4> Twisted Holly Wand</h4>'
let $unorderedList = '<ul storage="trunk"> <li>butter beer</li> <li class="secret">invisibility cloak</li> <li class="secret">magic map</li> <li class="secret">time turner</li> <li class="dog">leash</li> <li>Bertie Botts Every Flavor [Jelly] Beans.</li></ul>'

container.append($h1).append($h2).append($h3).append($h4).append($unorderedList)
console.log($h1, $h2, $h3, $h4)