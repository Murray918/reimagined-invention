let container = $('#container')
let h1 = '<h1>Hogwarts</h1>'
container.append(h1)
let h2 = '<h2>Lance</h2'
container.append(h2)
let h3 = '<h3> Gryffindor(?)</h3>'
container.append(h3)
let h4 = '<h4 class = "dog">Jadah Pinkett Smith</h4>'+
		 '<h4 class = "wand">Aspen Wood, Dragon Core, 11 inches</h4>'
container.append(h4)
let ul = '<ul storage= "Trunk">'+
			'<li>Butter Beer</li>'+
			'<li class = "Secret">Invisibility Cloak</li>'+
			'<li class = "Secret">Magic Map</li>'+
			'<li class = "Secret">Time Turner</li>'+
			'<li class ="dog">Leash</li>'+
			'<li>Bertie Botts Every Flavor [Jelly] Beans</li>'+
		'</ul>'
container.append(ul)
let h5 = '<h5>Spring 2017</h5>'
container.append(h5)
let table = '<table class="center">'+
				'<thead>'+
					'<th>Day</th>'+
					'<th>Classes</th>'+
				'</thead>'+
					'<tr>'+
						'<td>Monday</td>'+
						'<td>Charms</td>'+
					'</tr>'+
					'<tr>'+
						'<td>Tuesday</td>'+
						'<td>Herbology</td>'+
					'</tr>'+
					'<tr>'+
						'<td>Wednesday</td>'+
						'<td>Divination</td>'+
					'</tr><tr>'+
						'<td>Thursday</td>'+
						'<td>Potions</td>'+
					'</tr><tr>'+
						'<td>Friday</td>'+
						'<td>Physical Education</td>'+
					'</tr>'+
			'</table>'
container.append(table)
$('h4').remove(".wand")
$('li:eq(0)').remove()
$('h4').after('<h4 class = "wand">MAGIC WAAAAND</h4>')
$(".wand").css('color', 'red')
$('h4').hide('.dog')
$('h1').append('<h4 class = "dog">Jadah Pinkett Smith</h4>')
$('h1').hide('<h4 class = "dog">Jadah Pinkett Smith</h4>')
$('h4').show('.dog')
$('.secret').hide('slow').delay(2000).show('slow')
$('li:eq(3)').addClass('cabbage')
$('li:eq(3)').removeClass('cabbage')
$('h5').replaceWith('<h5>Fall 2018</h5>')
$('li:first-of-type').append().before("<li>Butter Beer</li>")
$('li:first-of-type').addClass("trunk")
$('ul').removeAttr()
$('ul').attr("storage","chest")
console.log(container)