let container = $("#container")
console.log(container)
let h1 = "<h1>Hogwarts</h1>"+
          "<h2>Jules C</h2>"+
          "<h3>Slytherin</h3>"+
          "<h4>Peekay</h4>"+
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

$("li:eq(1), li:eq(2), li:eq(3)").addClass('secret')


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
$("h5").text('Fall 2018')
$("[storage*=trunk]").prepend("<li>Butter Beer</li>")
$("[storage*=trunk]").attr("storage", 'Chest')










//for example x = [1,2,3,4]
//x.push(1).push(2) will give an error because push is an old method and does not return the array, it returns A NUMBRT
// which dosnt have access to the array.protoype library
// line 13 you are targeting the DOM element you CREATED IN HTML, and then you are APPENDING 
//because when its written like this you can add methods since it returns the OBJECT every time, "chaining."



	// .click(()=>{})
	// .append("yay")

// "p,dvi" means return all p's and all divs
// div>div> means only return divs that are direct descendants of a div
 // div div div means return a div inside a div inside a div but if there are other elements present it will skip over
 //them
// "body>div>div>p, div,div" returns a specific p that has direct descendants also return a div that hasunspecified div