let container = $('#container')
let $h1 = '<h1>Hogwarts</h1>'

let $h2 = '<h2> Andrew </h2>'
let $h3 = '<h3> Ravenclaw </h3>'
let $h4 = '<h4 class="dog"> Mack </h4><h4> Twisted Holly Wand</h4>'
let $unorderedList = '<ul storage="trunk"> <li>butter beer</li> <li class="secret">invisibility cloak</li> <li class="secret">magic map</li> <li class="secret">time turner</li> <li class="dog">leash</li> <li>Bertie Botts Every Flavor [Jelly] Beans.</li></ul>'
let $h5 = '<h5> Spring 2017 </h5>'
let $table = '<table class="center"><thead><th>Day</th><th>Classes</th></thead><tr><td>Monday</td><td>Herbology, Divination, History of Magic</td></tr><tr><td>Tuesday</td><td>Quidditch, Charms, Healing</td></tr><tr><td>Wednesday</td><td>Curses, Transmorgrifation, Alchemy</td></tr><tr><td>Thursday</td><td>Defense Against the Dark Arts, Astronomy, Flying</td></tr><tr><td>Friday</td><td>Potions, Care of Magical Creatures, Divination</td></tr></table>'
container.append($h1).append($h2).append($h3).append($h4)
container.append($unorderedList).append($h5).append($table)

