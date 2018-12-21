let container = $('#container');
let h1 = $('<h1>Hogwarts</h1>');
container.append(h1);
let h2 = $('<h2>Tristan</h2>');

let house = $('<h3>Ravenclaw</h3>');
let pet = $('<h4>Koguma</h4>');
let wand = $('<h4>Sycamore with phoenix feather core</h4>');
container.append(house, pet, wand);
pet.addClass('cat');

let list = $('<ul storage="trunk"></ul>');
list.append('<li>butter bear</li>');
list.append('<li class="secret">invisibility cloak</li>');
list.append('<li class="secret">magic map</li>');
list.append('<li class = "secret">time turner</li>');
list.append("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>");
list.append('<li class ="cat">leash</li>');

container.append(list);