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
			  "<li>time turner</li>", "<li>leash</li>", "<li>Bertie Bott's Every Flavor [Jelly] Beans.</li></ul>" ].join(" ");

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


//here is what the table looks like in normal html
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

//here is building the table in jQuery using loops

let header = ["Day", "Classes"];
let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let classes = ["Herbology", "Divination", "History of Magic", "Charms", "Potions", "Transfiguration", "Defense Against the Dark Arts", "Quidditch practice"]

let $header = ""
for (let head of header)
{
	$header = $header + `<th>${head}</th>`;
}
//console.log($header);

let $days1 = "";
for (let days of day)
{
	let randomClass = classes.splice(Math.floor(Math.random() * classes.length),1);  //randomly select a class not not the same class
	$days1 = $days1 + `<tr><th>${days}</th><th>${randomClass}</th></tr>`;
}
//console.log($days1);

let concatTable = $("<table><thead>" + $header + "</thead><tbody>" + $days1 + "</tbody></table>")

let h5 = $('<h5></h5>');
h5.append("Winter 2018");  //changed this to Winter becuase I will change this to Fall below.
container.append(h5);
container.append(p);  //this one is the hand made table
container.append(concatTable);  //this one is the loop made table
/*
Things get interesting

Break your wand! (select the element that contains your wand and remove it)
Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your style.css file
Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). 
   Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
Have your pet come back (remove your pet from the DOM, put it back in its original location)
*/


$( "h4" ).eq(-1).remove()
$( "li" ).remove( ":contains('beer')" );
$( "<h4>My New Wand</h4>" ).insertAfter( $( ".bunny" ).eq(0));
$( "h4" ).eq(1).css("color", "blue");
//$( "h4" ).filter(".bunny").text("");
//$( "h4" ).filter(".bunny").detach();

//this will place this in a queue and then run this function after everything lse is done.  Basically, showing I am moving my pet
window.setTimeout(() =>{ $( "h4" ).filter(".bunny").insertAfter( $( "table:last" )); },3000); 
 
//let spy = $('<h4></h4>');
//spy.append("Fred").addClass("bunny");
//container.append(spy);

window.setTimeout(() =>{ $( "h4" ).filter(".bunny").insertAfter( $( "h3" ) ); },5000); 
 


/*
Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
Accident! You transmogrified your pet's leash into half cabbage
add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
add an attribute of color: chartreuse; in your style.css for all elements that have a class of cabbage
Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
*/
$( ".secret" ).hide(2000).delay(2000);  //in milliseconds
$( ".secret" ).show(2000);  //in milliseconds

//leash will turn green because it has the cabbage class.  It will then go back to default due to losing the class.
$( "li" ).filter(".bunny").addClass("cabbage");
window.setTimeout(() =>{ $( "li" ).filter(".bunny").removeClass( "cabbage" ); },5000); 
 
/*
Though your time at Hogwarts is nearly over, your journey of learning has just begun

Update your class schedule to read 'Fall 2018'
Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
Add some CSS to your page. Feel free to experiment and make this page your own
*/

window.setTimeout(() =>{ $( "h5" ).replaceWith("<h5>Fall 2018</h5>"); },5000);
$( "ul" ).prepend( "<li>Butter Beer</li>" );   //.attr("storage","trunk");
$( "li:contains('Beer')" ).attr("storage","trunk");
$( "ul" ).attr("storage","chest");
container.css('background-image', 'url("harry_potter.png")');



//$( "li" ).filter( ":contains('leash')" ).text("leash");

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