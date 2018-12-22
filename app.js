let container = ('#container')
let h1 = '<h1>I DO NOT KNOW WHAT GOES HERE</h1>'
let h2 = '<h2>AJ Humphries</h2'
let h3 = '<h3>Slytherin</h3>'
let h4 = '<h4>Kerrigan</h4><h4>wand</h4>'
let ul = '<ul><li>Butter Beer</li><li>invisibility cloak</li><li>magic map</li><li>time turner</li><li>leash</li><li>Berti Bots</li></ul>'
let table = '<h5>Spring 2017</h5><table><thead><th>Day</th><th>Classes</th></thead><tr><td>Monday</td><td>Herbology, Dark Arts</td></tr><tr><td>Tuesday</td></tr><tr><td>Wednesday</td></tr><tr><td>Thursday</td></tr><tr><td>Friday</td></tr></table>'
console.log(container)
$(container).append(h1,h2,h3,h4,ul,table)
$("h4~h4").addClass("Elderwood")
$("ul").children(0).eq(1).addClass("secret")
$("ul").children(0).eq(2).addClass("secret")
$("ul").children(0).eq(3).addClass("secret")
$("ul").children(0).eq(4).addClass("cat")
$('td').next().addClass("Herbology Dark Arts")
$("h4~h4").remove()
$("ul").children(0).eq(0).remove()
$("h4").after("<h4>PhoenixButt</h4>")
$("h4~h4").addClass("wand")
$(".wand").css("color","indigo")
$("h4").first().remove()
$("h5").append("<h4></h4>")
$("h5 > h4").text("Kerrigan")
$("h5 > h4").remove()
$(".wand").before("<h4>Kerrigan</h4>")
console.log($(".wand"))


