const prompt = require("prompt-sync")();

console.log("Lets learn about functions! ");
console.log("***************************");

// In this assignment we will use
// functions to create emails messages
// for various occasions.

// We will use prompts to gather some info
// Then the function will create the email message.

let m1, m2, m3, m4, m5, message, active, messages;
messages = [];
active = "Hi";
// Note: prompt the user for info
while (active != "Bye") {
	let firstName = prompt("What is the first name? ");
	let lastName = prompt("What is the last name? ");
	let choosePrompt = prompt(
		"Enter a number to choose.Typing bye ends the run. 1 = Stock Pick, 2 = Christmas Gift, 3 = Amazon Deal, 4 = Crypto pick, and 5 = Car pick: "
	);
	if (choosePrompt === "1") {
		// Get more info from the user
		let stockPick = prompt("What is a hot stock? on the NASDAQ? ");
		m1 = coldCallStock(firstName, stockPick);
		messages.push(m1);
	} else if (choosePrompt === "2") {
		// Get more info from the user
		let christmasGift = prompt("What gift is popular this year? ");
		m2 = coldCallStock(firstName, christmasGift);

		messages.push(m2);
	} else if (choosePrompt === "3") {
		// Get more info from the user
		let amazonDeal = prompt("What Amazon deal is hot right now? ");
		m3 = coldCallAmazon(firstName, amazonDeal);

		messages.push(m3);
	} else if (choosePrompt === "4") {
		// Get more info from the user
		let cryptoPick = prompt("What crypto currency is hot right now? ");
		m4 = coldCallCrypto(firstName, cryptoPick);

		messages.push(m4);
	} else if (choosePrompt === "5") {
		// Get more info from the user
		let hotCar = prompt("What crypto currency is hot right now? ");
		m5 = coldCallCar(firstName, hotCar);

		messages.push(m5);
	} else if (choosePrompt === "Bye") {
		active = "Bye";
		console.log(messages);
	}
}
// This function will create a message
// That will advertise an Amazon deal
function coldCallAmazon(first, tickerSymbol) {
	// create a message.
	// use ${} to insert variables. (interpolation)
	// use + to join the strings. (concatination)
	// use `\n` to create a new line.
	message = `Hi ${first} !!
     We have a great deal for you. 
     The ${tickerSymbol} is selling fast and is the best deal around.
     Don't wait Call now at 800-123-4567 `;
	// return the message from the function.
	// NOTE: This will not print to the console.
	//       It will only return it for you to assign
	//       to your variable
	return message;
}
// This function will create a message
// That will advertise a stock
function coldCallChristmas(first, tickerSymbol) {
	// create a message.
	// use ${} to insert variables. (interpolation)
	// use + to join the strings. (concatination)
	// use `\n` to create a new line.
	message = `Hi ${first} !!
     We have a great gift idea for you. 
     The ${tickerSymbol} is set to be sold out
     it is what everyone is getting this christmas
     don't wait Call us at 800-123-4567 now!`;
	// return the message from the function.
	// NOTE: This will not print to the console.
	//       It will only return it for you to assign
	//       to your variable
	return message;
}

// This function will create a message
// That will advertise a stock
function coldCallStock(first, tickerSymbol) {
	// create a message.
	// use ${} to insert variables. (interpolation)
	// use + to join the strings. (concatination)
	// use `\n` to create a new line.
	message = `Hi ${first} !!
	  We have a great stock tip for you. 
		The ${tickerSymbol} is poised to soar, but don't delay!
		Call us at 800-123-4567 now!`;
	// return the message from the function.
	// NOTE: This will not print to the console.
	//       It will only return it for you to assign
	//       to your variable
	return message;
}
function coldCallCrypto(first, tickerSymbol) {
	// create a message.
	// use ${} to insert variables. (interpolation)
	// use + to join the strings. (concatination)
	// use `\n` to create a new line.
	message = `Hi ${first}
			We have a great crypto tip for you.
			The ${tickerSymbol} is poised to soar, but don't delay!
			Call us at 800-123-4567 now!`;
	// return the message from the function.
	// NOTE: This will not print to the console.
	//       It will only return it for you to assign
	//       to your variable
	return message;
}
function coldCallCar(first, tickerSymbol) {
	// create a message.
	// use ${} to insert variables. (interpolation)
	// use + to join the strings. (concatination)
	// use `\n` to create a new line.
	message = `Hi ${first}
			The ${tickerSymbol} is the next best thing.
      This car is super popular and good for long drives.
			Call us at 800-123-4567 now for your chance buy one!`;
	// return the message from the function.
	// NOTE: This will not print to the console.
	//       It will only return it for you to assign
	//       to your variable
	return message;
}
// TODO:
// Create 4 more messages for different emails.
// You may ask for more information from the user with prompts.

// NOTE:
// m1 through m5 are variables to store the messages.

// TODO: call your 4 functions and store them in variables.

// NOTE: This will print the first message out.

// TODO: print out your variables to the console.

// BONUS:
// Use if statements to select the kind of message to create based on a prompt from the user.

// MORE BONUSES:
// Use a while loop to keep producing new messages until the user types `bye`. Store the results of each new message in an array, and print them on completion.
