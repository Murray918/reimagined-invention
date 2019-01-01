// add name and wizarding institution to the DOM
let container = $('#container');
let h1 = '<h1>Hogwarts</h1>';
let h2 = '<h2>Tristan</h2>';
container.append(h1).append(h2);


// add content describing our basic wizard properties to the DOM
let house = '<h3>Ravenclaw</h3>';
let pet = '<h4>Koguma</h4>';
let wand = '<h4>Sycamore Wand with Phoenix Feather Core</h4>';

container.append(house, pet, wand);
$("h4:nth-of-type(1)").addClass('cat');

// add unordered list categorized as a trunk which contains our wizarding belongings to the DOM
let list = $('<ul storage="trunk"></ul>');

// more direct way to add items w/ classes
// .append('<li>butter bear</li>')
// .append('<li class="secret">invisibility cloak</li>')
// .append('<li class="secret">magic map</li>')
// .append('<li class = "secret">time turner</li>')
// .append("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>")
// .append('<li class ="cat">leash</li>')

// better way for practicing jquery methods and selectors
container.append(list);
for (let i=0; i<6; i++) {
	$(list).append('<li></li>')
}
// $(list).append('<li></li>', '<li></li>', '<li></li>', '<li></li>', '<li></li>', '<li></li>')
$("li:eq(0)").append("Butter Bear");
$("li:eq(1)").append("Invisibility Cloak").addClass("secret");;
$("li:nth-of-type(3)").append("Magic Map").addClass("secret");
$("li:nth-of-type(4)").append("Time Turner").addClass("secret");
$("li:nth-of-type(5)").append("Bertie Bott's Every Flavor [Jelly] Beans");
$("li:nth-of-type(6)").append("Leash").addClass("cat");



// add table with list of classes
container.append('<h5></h5>').append("<table></table>");
$("h5").append("Spring 2017");

// create table header with names for colums"
$("table").append("<thead><th></th><th></th></thead>");
$("th:eq(0)").append("Day");
$("th:eq(1)").append("Classes");

// add first row, with name of day and classes
$("table").append('<tr><td></td><td></td></tr>'); 
$("tr:nth-of-type(1) td:nth-of-type(1)").append("Monday");
$("tr:nth-of-type(1) td:nth-of-type(2)").append("Herbology, Transfiguration, Potions, History of Magic");

// add second row, with name of day and classes
$("table").append('<tr><td></td><td></td></tr>');
$("tr:nth-of-type(2) td:nth-of-type(1)").append("Tuesday");
$("tr:nth-of-type(2) td:nth-of-type(2)").append("Divination, Charms, Defence Against the Dark Arts, Quidditch Practice");

// add third row, with name of day and classes
$("table").append('<tr><td></td><td></td></tr>');
$("tr:nth-of-type(3) td:nth-of-type(1)").append("Wednesday");
$("tr:nth-of-type(3) td:nth-of-type(2)").append("Herbology, Transfiguration, Potions, History of Magic");

// add fourth row, with name of day and classes
$("table").append('<tr><td></td><td></td></tr>');
$("tr:nth-of-type(4) td:nth-of-type(1)").append("Thursday");
$("tr:nth-of-type(4) td:nth-of-type(2)").append("Divination, Charms, Defence Against the Dark Arts, Quidditch Practice");

// add fifth row, with name of day and classes
$("table").append('<tr><td></td><td></td></tr>');
$("tr:nth-of-type(5) td:nth-of-type(1)").append("Friday");
$("tr:nth-of-type(5) td:nth-of-type(2)").append("Herbology, Transfiguration, Potions, History of Magic");

// remove wand element to be re-added at a later time
$("h4:nth-of-type(2)").detach();

// remove butter bear li element
$("li:eq(0)").remove();

// add wand back to its original place
$("h4:eq(0)").after(wand);

// use jQuery to add color to wand element
$("h4:nth-of-type(2)").css({"color": "indigo"});

// move pet element elsewhere in page
$(".cat:eq(0)").detach().appendTo("body");

// insert pet in new place in different place in DOM
$(".cat:eq(1)").detach().insertAfter("h3:eq(0)");

// hide cat and show again after a slight delay
$(".secret").hide("slow").delay(2000).show("slow");

// add class of "cabbage" to the leash
$("li.cat").addClass("cabbage");
$("li.cat").removeClass("cabbage");

// update semester
$("h5").replaceWith("<h5>Fall 2018</h5>");

// add a new butterbeer to the top of the unorderd list
$("li:first-of-type").before("<li>Butter beer</li>");

// replace value of unordered list's "storage" attribute to "chest"
$("ul").attr("storage", "chest");











