function draw (player, amount){
    for (let i = 0; i < amount; i++){
        player.hand.push(player.deck.pop());
    }
}

function moveCard(card, from, to){
	to.push(from.splice(0, 1, card)[0]);
}

function close (player, opponent, amount){
	var direction = 0;
	if (player.position < opponent.position){
		direction = 1;
	} else {
		direction = -1;
	}
	for (let i = 0; i < amount; i++){
		if (player.position < opponent.position - 1 || player.position > opponent.position + 1){
			player.position += direction;
		}
	}
}

function advance (player, opponent, amount){
	var leap = 0;
	if (player.position < opponent.position){
		leap = 1;
	} else {
		leap = -1;
	}
	for (let i = 0; i < amount; i++){
		if ((player.position == opponent.position - 1 && leap == 1) || (player.position == opponent.position + 1 && leap == -1)){
			leap *= 2;
		}
		if (player.position + leap >= 0 && player.position + leap <= 8){
			player.position += leap;
		}
		if (Math.abs(leap) == 2) leap /= 2;
	}
}

function retreat (player, opponent, amount){
	var direction = 0;
	if (player.position < opponent.position){
		direction = -1;
	} else {
		direction = 1;
	}
	for (let i = 0; i < amount; i++){
		if (player.position > 0 && player.position < 8){
			player.position += direction;
		}
	}
}