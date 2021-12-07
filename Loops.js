let answer;
let counter = 0;
let random = Math.ceil(Math.random()*10);
let table = `<table>
<tr>
  <th>Turns</th>
  <th>Numbers</th>
  <th>Advice</th>
</tr>`;

do {
    counter++;
    
    answer = prompt("Guess a number from 1-10");
    let abs = Math.abs(random - answer);
    let check = abs==1?"VERY HOT":(abs==2)?"HOT":(abs==3)?"WARM":"COLD";

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
        document.body.innerHTML += `<h1>You guessed! <br> By ${counter}${(counter.toString()[counter.toString().length-1]=="1")?"st":(counter.toString()[counter.toString().length-1]=="2")?"nd":(counter.toString()[counter.toString().length-1]=="3")?"rd":"th"} time.</h1>`+table+'</table>' + 
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


