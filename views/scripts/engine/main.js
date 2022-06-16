// On page load
$(document).ready(function(){
    const RENDERER = new Renderer();
    let testNormal = new Card('Dive', CardType.Normal);
    let testCharacter1 = new Card('Ryu', CardType.Character);
    let testCharacter2 = new Card('Ken', CardType.Character);
    let testState = new GameState(
        new Player(testCharacter1, 2, [testNormal, testNormal, testNormal]),
        new Player(testCharacter2, 6, [testNormal, testNormal, testNormal]),
        null
    );
    RENDERER.render(testState);
	console.log(testState);
    moveCard(testState.p1.deck[0], testState.p1.deck, testState.p1.gauge);
    RENDERER.render(testState);
	console.log(testState);
});