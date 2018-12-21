
let $container = $('#container')

let $h1 = '<h1>Hogwarts</h1>'
let $h2 = '<h2>Jamal Amar</h2>'
let $h3 = '<h3>Slytherin</h3>'
let $h4 = '<h4>Panki</h4>'
let $h5 = '<h4>silver</h4>'

let $unorderedList = "<ul>"+
						"<li>butter beer</li>"+
						"<li>invisibility cloak</li>"+
						"<li>magic map</li>"+
						"<li>time turner</li>"+
						"<li>leash</li>"+
						"<li>Bertie Bott's Every Flavor [Jelly] Beans</li>"+
					 "</ul>"


console.log($container)


$('#container')
.append($h1)
.append($h2)
.append($h3)
.append($h4)
.append($h5)
.append($unorderedList)



$('h4:first-of-type').addClass("dog")
$('ul').attr("storage", "trunk")
$('li:nth-of-type(5)').addClass("dog")


