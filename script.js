/* Numbered Heads Together Process */

var menuItems = ["Read Question", "Volunteer Answers", "Vote Y or N", "All Agree?", "Review Explanation", "Return","=> Split Vote", "=> Explain #2", "=> Discuss #2",  "=> Vote #1 or #2"];

var webMenuItems = [["Display Menu", displayMenu], ["Quit", quit]];

function displayWebMenu() {
  for (let item = 0; item < webMenuItems.length; item++) {
    let newButton = document.createElement("button");
    newButton.innerHTML = webMenuItems[item][0]
    newButton.addEventListener("click", webMenuItems[item][1]);
    navbar.appendChild(newButton);
  }
}

/* Pads a menu item to 35 spaces for nice menu display */
function padMe(menuItem) {
	let spaces ="";
	if (menuItem.length < 30) {
		for (space=1;space<= 30-menuItem.length;space++){
			spaces+=" ";
		}
		menuItem+=spaces;
	}
	return menuItem;
}

displayMenu();
  /* FUNCTIONS */
  /* DisplayMenu function -Two Columns
 * Reads menu items and control digits from an array and builds a string to present options to user
 * Calls functions based on user selection
 * @param none
 * @return none
 */
function displayMenu(){
  var menuEven = true;
  var menu = "*** Group Test Review Menu***\n";
  if (menuItems.length%2 != 0) {
    limit = Math.floor(menuItems.length/2)+1;
    menuEven = false;
  }
  else limit = menuItems.length/2; 
  for (var i = 1; i <= limit; i++){
    if (menuEven==true || (menuEven==false && i == limit)){
      menu+=i+" - "+padMe(menuItems[i-1])+"         "+(i+limit)+" - "+menuItems[i-1+limit]+"         "+"\n";
    }
    else menu+=i+" - "+padMe(menuItems[i-1])+"\n";
  }
  var choice = prompt(menu+="\nEnter the number of the option you want");
  if (choice == "q") {
    return true;
  }
  else if (isNaN(choice)) {
    alert("Invalid selection. Enter a numeric choice or 'q' to quit.");
    displayMenu();
  }
  else {
    choice = parseInt(choice);
    if (choice > 0 && choice <= menuItems.length){
      switch (choice){
        case 1:
          readQuestion(choice);
          break;
        case 2:
          getVolunteer(choice);
          break;
        case 3:
          voteYN(choice);
          break;
        case 4:
          unanimous(choice);
          break;
        case 5:
          reviewAnswer(choice);
          break;
        case 6:
          alert("Tell teacher you're ready.");
          break;
        case 7:
          talkPrep(choice);
          break;
        case 8:
          returnNow(choice);
          break;
        case 9:
          splitVote(choice);
          break;
        case 10:
          explainNo(choice);
          break;
        case 11:
          discuss(choice);
          break;
        case 12:
          vote12(choice);
          break;
      }
    }
    else {
      alert("Invalid selection.  There are "+menuItems.length+ " choices.");
      displayMenu();
    }
  }
}

/* STUBS */

function quit() {
  var message = "You quit!";
}

function readQuestion(choice) {
  var message = "Facilitator reads the question aloud, and asks if anyone has an answer.  If anyone says they do, Facilitator asks them to enter it in chat.\n\nIf nobody does, facilitator asks each person by name to put a guess in chat, suggesting they use text from one of the display shapes in the flowchart.";
  alert(message+next(choice));
  displayMenu();
}

function getVolunteer(choice) {
  var message = "Facilitator asks the first person to put an answer in chat to explain it, preferably using a mic.\n\nIf unwilling, facilitator moves to the next answer.\n\nIf nobody is willing, facilitator picks the answer they like best and explains it.";
  alert(message+next(choice));
  displayMenu();
}

function voteYN(choice) {
  var message = "Facilitator holds a vote on the first explained answer, which will be called \"#1\".  Is this the correct answer? write Y or N in chatbox, and press enter when I count to 3.\"\n\nIf anyone does not vote, explain that we need to all vote together, and hold the vote again.";
  alert(message+next(choice));
  displayMenu();
}

function unanimous(choice) {
  var message = "If everyone votes Y, then the vote is unanimous. If there is a difference of opinion, it is a Split Vote.\n\nJump to that item instead of the next, and return only when the vote is unanimous (or the group is done discussing). Assuming it is unanimous, continue with 5.";
  alert(message+next(choice));
  displayMenu();
}
  
function reviewAnswer(choice){
  var message = "After a unanimous vote, the facilitator should restate (in own words) the reason for the answer, and ask if anyone has questions about why that's correct. \n\nIf there are questions and nobody volunteers, facilitator should answer.";
  alert(message+"\n\nNow press \"q\" and tell teacher you're ready.");
  displayMenu();
}
  
function splitVote(choice){
  var message = "If there is a split vote, ask whoever voted N to say what their answer would be.\n\nThis will be called answer \"#2\".";
  alert(message+next(choice));
  displayMenu();
}
  
function explainNo(choice){
  var message = "If there is a clear alternative answer, ask that one of the people who agree with it explain it to the group.\n\nIf nobody will explain it, including the facilitator, then it is discarded and answer #1 is chosen.";
  alert(message+next(choice));
  displayMenu();
}
  
function discuss(choice){
  var message = "If someone is willing to explain answer #2, then the group discusses the difference between the two answers until everyone feels they understand.";
  alert(message+next(choice));
  displayMenu();
}
  
function vote12(choice){
  var message = "After discussion, hold a vote. This time, group members key in 1 or 2, and hit enter when facilitator counts to 3.\n\nIf it is a unanimous vote, return to the \"Unanimous\" step.\n\nIf not, either have more discussion, or go with the majority.";
  alert(message+next(choice));
  displayMenu();
}

function next(choice){
  return "\n\nNow pick "+(parseInt(choice)+1)+".";
}