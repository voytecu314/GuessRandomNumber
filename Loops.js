let answer;
let counter = 0;
let max = parseInt(prompt("Give maximal number up to which I can choose","10"));
let random = Math.ceil(Math.random()*max);
let table = `<table>
<tr>
  <th>Turns</th>
  <th>Numbers</th>
  <th>Advice</th>
</tr>`;

do {
    counter++;
    
    answer = prompt(`Guess a number from 1 - ${max}`);
    let abs = Math.abs(random - answer);
    let check = (abs==0)?"BINGO":(abs<=parseInt(.1*max))?"VERY HOT":(abs<=parseInt(.2*max))?"HOT":(abs<=parseInt(.3*max))?"WARM":"COLD";

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
		${counter}
		${(counter.toString()[counter.toString().length-1]=="1")?"st"
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
            alert(check);
        }
} while(random!=answer)


// do {
//  var answer = prompt("How can I help you?","Input empty string to Quit");
// } while (answer)


