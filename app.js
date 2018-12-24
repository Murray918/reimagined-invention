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
$(list).append('<li></li>', '<li></li>', '<li></li>', '<li></li>', '<li></li>', '<li></li>')
$("li:nth-of-type(1)").append("Butter Bear");
$("li:nth-of-type(2)").append("Invisibility Cloak").addClass("secret");;
$("li:nth-of-type(3)").append("Magic Map").addClass("secret");
$("li:nth-of-type(4)").append("Time Turner").addClass("secret");
$("li:nth-of-type(5)").append("Bertie Bott's Every Flavor [Jelly] Beans");
$("li:nth-of-type(6)").append("Leash").addClass("cat");



// add table with list of classes
container.append('<h5></h5>').append("<table></table>");
$("h5").append("Spring 2017");

// create table header with names for colums"
$("table").append('<thead><th></th><th></th></thead>')
$("th:nth-of-type(1)").append("Day");
$("th:nth-of-type(2)").append("Classes");

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