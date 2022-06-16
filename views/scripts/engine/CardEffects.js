function draw (player, amount){
    for (let i = 0; i < amount; i++){
        player.hand.push(player.deck.pop());
    }
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

function retreat (player, opponent, amount){
	var direction = 0;
	if (player.position < opponent.position){
		direction = -1;
	} else {
		direction = 1;
	}
	for (let i = 0; i < amount; i++){
		if (player.position != 0 || player.position != 8){
			player.position += direction;
		}
	}
}