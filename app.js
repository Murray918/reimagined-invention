
//how to target a div 
let container = $("#container")
let h1 = '<h1> HARRY P </h1>'
let h2 = '<h2> Jules C </h2>'
let h3 = '<h3> Slytherin 4 LYFE</h3>'
let h4 = '<h4> Boo </h4>'
// $container.append("<p>hiiii</p>")
// $container.click(() =>{})
// $container.append("yay")

//for example x = [1,2,3,4]
//x.push(1).push(2) will give an error because push is an old method and does not return the array, it returns A NUMBRT
// which dosnt have access to the array.protoype library
// line 13 you are targeting the DOM element you CREATED IN HTML, and then you are APPENDING 
//because when its written like this you can add methods since it returns the OBJECT every time, "chaining."
container.append(h1,h2,h3,h4)

$('h4').addClass("boo");
	// .click(()=>{})
	// .append("yay")

// "p,dvi" means return all p's and all divs
// div>div> means only return divs that are direct descendants of a div
 // div div div means return a div inside a div inside a div but if there are other elements present it will skip over
 //them
// "body>div>div>p, div,div" returns a specific p that has direct descendants also return a div that hasunspecified div