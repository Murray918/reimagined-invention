
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


let $table = "<h5>Spring 2017</h5>"+
			"<table>"+
				  "<thead>"+
					   "<th>Day</th>"+
					   "<th>Classes</th>"+
				  "</thead>"+
				  "<tr>"+
					   "<td>Monday</td>"+
					   "<td>Divination</td>"+
				  "</tr>"+
				  "<tr>"+
					   "<td>Tuesday</td>"+
					   "<td>Defence</td>"+
				  "</tr>"+
		   		  "<tr>"+
					   "<td>Wednesday</td>"+
					   "<td>History</td>"+
				  "</tr>"+
				  "<tr>"+
					   "<td>Thursday</td>"+
					   "<td>Herbology</td>"+
				  "</tr>"+
				  "<tr>"+
					   "<td>Friday</td>"+
					   "<td>Spells</td>"+
				  "</tr>"+
			"</table>"


console.log($container)


$('#container')
.append($h1)
.append($h2)
.append($h3)
.append($h4)
.append($h5)
.append($unorderedList)
.append($table)



$('h4:first-of-type').addClass("dog")
$('ul').attr("storage", "trunk")
$('li:nth-of-type(2)').addClass("secret")
$('li:nth-of-type(3)').addClass("secret")
$('li:nth-of-type(4)').addClass("secret")
$('li:nth-of-type(5)').addClass("dog")
$('h4:last-of-type').remove()
$('li:first-of-type').remove()
$('h4').after("<h4>New Wand!</h4>")
$('h4:last-of-type').css("color", "indigo")
$('h4:first-of-type').detach()
$('h4:first-of-type').before($h4)