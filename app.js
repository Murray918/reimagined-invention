let $container = $("#container")
let $headings = ["<h1>Hogwarts</h1>",
		  		 "<h2>Jacob</h2>",
		    	 "<h3>Slytherin</h3>",
		  		 "<h4>Dumbledork</h4>",
		  		 "<h4>Hawthorn Wand with Dragon Heartstring Core</h4>" ]
let orderedList = ["<ul storage='trunk'>", 
				   "<li>Butter Beer</li>", 
				   "<li>Invisibility Cloak</li>", 
				   "<li>Magic Map</li>",  
				   "<li>Time Turner</li>", 
				   "<li>leash</li>", 
				   "<li>Bertie Bott's Every Flavor [Jelly] Beans</li>", 
				   "</ul>" ]	
for(let heading of $headings) {
	$container.append(heading)
}		
for(let item of orderedList) {
	$container.append(item)
}
for(let i = 1;i <= 3; i++) {
	$(`li:eq(${i})`).addClass("secret")
}
$("li:eq(4), h4:eq(0)").addClass("Elephant")
$("ul").addClass("itemList")
$("h4:eq(1)").remove()
$("li:eq(0)").remove()
$("<h4>Super Wand With USB 3.0 and Wireless Conectivity</h4>").insertAfter(".Elephant:eq(0)")
$("h4:eq(1)").css({"color" : "indigo"})
let petAdventure = $(".Elephant:eq(0)").detach()
$container.append(petAdventure)
let petReturn = $(".Elephant:eq(1)").detach()
$(petReturn).insertAfter("h3")
