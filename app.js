

let container = $("#container")
console.log(container)
let h1 = "<h1>Hogwarts</h1>"+
          "<h2>Johnathan</h2>"+
          "<h3>Gryffindor</h3>"+
          "<h4>Steve</h4>"+
          "<h4>Hornbeam wand with Dragon's breath</h4>"
container.append(h1)


let list = ["<ul storage = 'trunk'>",
            "<li>butter beer</li>",
            "<li>invisibility cloak</li>",
            "<li>magic map</li>",
            "<li>time turner</li>",
            "<li>leash</li>",
            "<li>Bertie Bott's Every Flavor [Jelly] Beans</li>"]
for(let list2 of list){
	container.append(list2)
}
for(i = 1; i <=3; i++){
	$(`li:eq(${i})`).addClass('secret')
}
$("li:eq(4), h4:eq(0)").addClass('hippo')




