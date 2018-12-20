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