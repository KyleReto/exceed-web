function draw (player, amount){
    for (let i = 0; i < amount; i++){
        player.hand.push(player.deck.pop());
    }
} 