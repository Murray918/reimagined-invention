let $container = $('#container')
let $h1 = '<h1>WE DOIN MAgIC</h1>'

$container.append($h1)

let $h2 = '<h2>Novice wiZurd Sithis</h2>'
let $h3 = '<h3>You are in Gryffindor!</h3>'
let $h4 = '<h4 class="demon">Ördög the Hungarian shapeshifting demon</h4><h4 class="wand">Hawthorn Wand with Dragon Heartstring Core</h4>'


$container.append($h2).append($h3).append($h4)

let $ul = "<ul><li class='remove'>butter beer</li><li class='secret'>invisibility cloak</li><li class='secret'>magic map</li><li class ='secret'>time turner</li><li class='demon'>leash</li><li>Bertie Bott's Every Flavor [Jelly] Beans.</li>"

$container.append($ul)

let $table = "<h5>Spring 2017</h5><table class='center'><thread><th>Day</th><th>Classes</th></thread><tr><td>MonDay</td><td>Dark Arts</td>	</tr><tr><td>TuesDay</td><td>Summoning</td> </tr><tr><td>WednesDay</td><td>Transfiguration</td></tr><tr><td>ThursDay</td><td>Divination</td></tr><tr><td>FriDay</td><td>Curses</td></tr></table>"

$container.append($table)

$('h4').remove('.wand')
$('li').remove('.remove')
$('h4').after('<h4>WaNd To eNd AlL wAnDs</h4>')
$('h4').last().css({'color':'green'})
$('ul li.secret').hide('slow').delay(2000).show(2000)
$('ul li').eq(3).addClass('cabbage')
$('ul li').eq(3).removeClass('cabbage')
$container.find('h4').eq(0).appendTo('h1')
$container.find('h4').appendTo('h3')













