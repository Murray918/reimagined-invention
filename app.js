

let container = $("#container")
console.log(container)
let h1 = "<h1>Hogwarts</h1>"+
          "<h2>Johnathan</h2>"+
          "<h3>Gryffindor</h3>"+
          "<h4>Steve</h4>"+
          "<h4>Hornbeam wand with Dragon's breath</h4>"
container.append(h1)

let list = "<ul storage = 'trunk'>"+
            "<li>butter beer</li>"+
            "<li>invisibility cloak</li>"+
            "<li>magic map</li>"+
            "<li>time turner</li>"+
            "<li>leash</li>"+
            "<li>Bertie Bott's Every Flavor [Jelly] Beans</li>"+
            "</ul>"
container.append(list)

for(i = 1; i <=3; i++){
	$(`li:eq(${i})`).addClass('secret')
}



let table = "<table>"+
			    "<thead>"+
			    	    "<th>Day</th>"+
			            "<th>Classes</th>"+
			        "<tr>"+
			            "<td>Monday</td>"+
			            "<td>Potions</td>"+
			        "</tr>"+
			        "<tr>"+
			            "<td>Tuesday</td>"+
			            "<td>Herbology</td>"+
			        "</tr>"+
			        "<tr>"+
			            "<td>Wednesday</td>"+
			            "<td>History of Magic</td>"+
			        "</tr>"+
			        "<tr>"+
			            "<td>Thursday</td>"+
			            "<td>Charms</td>"+
			        "</tr>"+
			        "<tr>"+
			            "<td>Friday</td>"+
			            "<td>Quidditch practice</td>"+
			        "</tr>"+        
			    "</thead>"+
			"</table>"
container.append("<h5>Spring 2017</h5>")
container.append(table)

$("li:eq(4), h4:eq(0)").addClass('hippo')
$("h4:eq(1)").remove()
$("li:eq(0)").remove()
$("<h4>New wand</h4>").insertAfter("h4")
$("h4:eq(1)").css({"color": "indigo"})
//$("h4:eq(0)").detach()
let oldPet = $("h4:eq(0)").detach()
container.append(oldPet)
$(".secret").hide('slow').delay(2000).show('slow')
$("li:eq(3)").addClass('cabbage')
$("li:eq(3)").removeClass('cabbage')








