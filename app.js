let $container = $("#container")
let $headings = ["<h1>Hogwarts</h1>",
		  		 "<h2>Jacob</h2>",
		    	 "<h3>Slytherin</h3>",
		  		 "<h4>Dumbledork</h4>",
		  		 "<h4>Hawthorn Wand with Dragon Heartstring Core</h4>" ]
let orderedList = "<ul storage='trunk'>"+
				   "<li>Butter Beer</li>"+
				   "<li>Invisibility Cloak</li>"+
				   "<li>Magic Map</li>"+
				   "<li>Time Turner</li>"+
				   "<li>leash</li>"+
				   "<li>Bertie Bott's Every Flavor [Jelly] Beans</li>"+
				   "</ul>" 
let table = "<table>"+
			    "<thead>"+
			    	"<th>Day</th>"+
			    	"<th>Classes</th>"+
			    	"<tr>"+
			    		"<td>Monday</td>"+
			    		"<td>Herbology, Divination</td>"+
			    	"</tr>"+
			    	"<tr>"+
			    		"<td>Tuesday</td>"+
			    		"<td>History of Magic, Charms</td>"+
			    	"</tr>"+
			    	"<tr>"+
			    		"<td>Wednesday</td>"+
			    		"<td>Potions, Transfiguration</td>"+
			    	"</tr>"+
			    	"<tr>"+
			    		"<td>Thursday</td>"+
			    		"<td>Defense Against the Dark Arts</td>"+
			    	"</tr>"+
			    	"<tr>"+
			    		"<td>Friday</td>"+
			    		"<td>Quidditch practice</td>"+
			    	"</tr>"+
			    "</thead>"+
			"</table>" 
for(let heading of $headings) {
	$container.append(heading)
}		
$container.append(orderedList)
for(let i = 1;i <= 3; i++) {
	$(`li:eq(${i})`).addClass("secret")
}
$container.append("<h5>Spring 2017</h5>")
$container.append(table)
$("table").position()
$("li:eq(4), h4:eq(0)").addClass("Elephant")
$("h4:eq(1)").remove()
$("li:eq(0)").remove()
$("<h4>Super Wand With USB 3.0 and Wireless Conectivity</h4>").insertAfter(".Elephant:eq(0)")
$("h4:eq(1)").css({"color" : "indigo"})
let petAdventure = $(".Elephant:eq(0)").detach()
$container.append(petAdventure)
let petReturn = $(".Elephant:eq(1)").detach()
$(petReturn).insertAfter("h3")
$(".secret").hide("slow").delay("2000")
$(".secret").show("slow")
$(".Elephant:eq(1)").addClass("cabbage")
$(".Elephant:eq(1)").removeClass("cabbage")
$("h5").text("Spring 2018")
$("table").css({"margin":"0 auto"})
$("[storage*='trunk']").prepend("<li>Butter Beer</li>")
$("[storage*='trunk']").attr("storage", "chest")
//This is where I would add CSS
