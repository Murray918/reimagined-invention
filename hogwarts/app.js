//const $ = jQuery;

//const array = ["Hello", "Goodbye", "Party Time"];

//const html = `
//<h1></h1>
//`
//const list = `<ul><ul>`

//- Query for your div with the id of container and set it to a variable named $container
//- console.log $container
//- Create an <h1> element and set it to a variable called $h1 and console log it
//- Add some text inside the h1 element. Example text: 'Hogwarts'
//- Why isn't your $h1 it appearing on your page?

let container = $('#container');
console.log(container);

let h1 = $('<h1></h1>');
h1.append("Hogwarts");
container.append(h1);


//- h2 element with your name
//- h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
//- h4 element with your pet's name
//- this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
//- h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )
//- In your style.css add an attribute of font-family: fantasy; to all elements that have a class that matches your pet's class

let h2 = $('<h2></h2>');
h2.append("Christopher");
container.append(h2);

let h3 = $('<h3></h3>');
h3.append("Ravenclaw");
container.append(h3);

let h4 = $('<h4></h4>');
h4.append("Fred").addClass("bunny");
container.append(h4);

let h4Wand = $('<h4></h4>');
h4Wand.append("MegaSwampGator Wand");
container.append(h4Wand);





//h4:eq(0)

/*
$(document).ready(function() {

   $("div").click(function() {
      alert("Hello, world!");
   });
});
*/

//$('#container').append(html).addClass('party')
//let x = "<p>Blah</p>";
//$('<p></p>').append(x);