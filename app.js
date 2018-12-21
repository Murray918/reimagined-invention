let container = $('#container');
let h1 = $('<h1>Hogwarts</h1>');
container.append(h1);
let h2 = $('<h2>Tristan</h2>');

let house = $('<h3>Ravenclaw</h3>');
let pet = $('<h4>Koguma</h4>');
let wand = $('<h4>Sycamore with phoenix feather core</h4>');
container.append(house, pet, wand);
pet.addClass('cat');