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

/*
Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):

list items of

butter beer
invisibility cloak (add a class of secret)
magic map (add a class of secret)
time turner (add a class of secret)
leash (for your pet, be sure to give this list element the same class as you gave your pet)
Bertie Bott's Every Flavor [Jelly] Beans.
append the unordered list to your container div
In your style.css file, give the items with a class of secret an attribute of opacity: 0.5;

In your style.css file, remove the bullet points from the list items
*/

let ul = [ "<ul><li>butter beer</li>", "<li>invisibility cloak</li>", "<li>magic map</li>", 
			  "<li>time turner</li>", "<li>leash Fred</li>", "<li>Bertie Bott's Every Flavor [Jelly] Beans.</li></ul>" ].join(" ");

let $ul = $(ul).attr("storage","trunk");
container.append($ul);

let $list = $("li");
console.log($list);

$list.eq(1).addClass("secret");
$list.eq(2).addClass("secret");
$list.eq(3).addClass("secret");
$list.eq(4).addClass("bunny");


/*
Make a table
Hint: Look under More Examples, <p>Simple table with header</p> at MDN to see the correct HTML element layout

Right above your table add an h5 that says 'Spring 2017'
Inside the table add a thead element
Inside the thead element add two th elements
in the first th add the text Day
in the second th add the text Classes
Create a tr element and add two td elements inside.
in the first td add the day Monday
in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
In your style.css file, add a gray 1px solid border around your table, th elements and td elements
In your style.css file, add a rule that will center your table on the page


*/

let p = " \
<table> \
    <thead> \
        <th>Day</th> \
		<th>Classes</th> \
    </thead> \
    <tbody> \
        <tr> \
            <th>Monday</th> \
            <th>Charms</th> \
        </tr> \
        <tr> \
            <th>Tuesday</th> \
            <th>Potions</th> \
        </tr> \
        <tr> \
            <th>Wednesday</th> \
            <th>Transfiguration</th> \
        </tr> \
        <tr> \
            <th>Thursday</th> \
            <th>Defense Against the Dark Arts</th> \
        </tr> \
        <tr> \
            <th>Friday</th> \
            <th>Divination</th> \
        </tr> \
    </tbody> \
</table>"

let h5 = $('<h5></h5>');
h5.append("Winter 2018");
container.append(h5);
container.append(p);

//let $table = 




//$("#myimg").attr("src", "/jquery/images/jquery.jpg");


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