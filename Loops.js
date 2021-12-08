let answer;
let counter = 0;
let max;
while(!max || max<=5){	
	max = parseInt(prompt("Give maximal number biger than 5 up to which I can choose","6"));	
}

if(max<15) {
	document.body.innerHTML=`<h1>LEVEL VERY EASY</h1>`
} else if(max<50) {
	document.body.innerHTML=`<h1>LEVEL EASY</h1>`
	} else if(max<225) {
		document.body.innerHTML=`<h1>LEVEL INTERMEDIATE</h1>`
		} else if(max<500) {
			document.body.innerHTML=`<h1>LEVEL ADVANCED</h1>`
			} else if(max<1000) {
				document.body.innerHTML=`<h1>LEVEL HARD</h1>`
				} else if(max>1000) {
					document.body.innerHTML=`<h1>LEVEL VERY HARD</h1>`
					}

let random = Math.ceil(Math.random()*max);
let table = `<table>
<tr>
  <th>Turns</th>
  <th>Numbers</th>
  <th>Advice</th>
</tr>`;
let absBefore = max; //because u dont know the number
let temperature = '';

do {
    counter++;
    
    answer = prompt(`Guess a number from 1 - ${max}`);
    let abs = Math.abs(random - answer);
    let check = (abs==0)?"BINGO":(abs<=parseInt(.1*max))?"VERY HOT":(abs<=parseInt(.2*max))?"HOT":(abs<=parseInt(.3*max))?"WARM":"COLD";
	temperature = (absBefore-abs>0)?"getting warmer":(absBefore-abs<0)?"getting colder":"the same temperature as before";
	absBefore = abs;
	
    console.log("*********");
    console.log("Comp no: "+random);
    console.log("User no: "+answer);
    console.log("*********");

    table+=`<tr>
            <td>${counter}</td>
            <td>${answer}</td>
            <td>${check}</td>
            </tr>`;


    if(answer==random) {
        document.body.innerHTML += 
		`<h1>You guessed! <br> By 
		${counter}${(counter.toString()[counter.toString().length-1]=="1")?"st"
				   :(counter.toString()[counter.toString().length-1]=="2")?"nd"
				   :(counter.toString()[counter.toString().length-1]=="3")?"rd"
		           :"th"} time.</h1>`
		 +table+'</table>' + 
        `<div>
        ${random}
        </div>`; 
        alert("BINGO!");
    } 
        else {
            alert("Its "+check+" and is "+temperature);
        }
} while(random!=answer)


// do {
//  var answer = prompt("How can I help you?","Input empty string to Quit");
// } while (answer)


