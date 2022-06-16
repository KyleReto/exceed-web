// On page load
$(document).ready(function(){
    const RENDERER = new Renderer();
    let testNormal = new Card('Test', CardType.Normal);
	let focus = new Card('Focus', CardType.Normal);
	let sweep = new Card('Sweep', CardType.Normal);
	let spike = new Card('Spike', CardType.Normal);
	let dive = new Card('Dive', CardType.Normal);
	let assault = new Card('Assault', CardType.Normal);
	let cross = new Card('Cross', CardType.Normal);
	let grasp = new Card('Grasp', CardType.Normal);
	let block = new Card('Block', CardType.Normal);
    let testCharacter1 = new Card('Ryu', CardType.Character);
    let testCharacter2 = new Card('Ken', CardType.Character);
    let testState = new GameState(
        new Player(testCharacter1, 2, [focus, sweep, spike, dive, assault, cross, grasp, block]),
        new Player(testCharacter2, 6, [testNormal, testNormal, testNormal]),
        null
    );
    //moveCard(testState.p1.deck[0], testState.p1.deck, testState.p1.gauge);
	draw(testState.p1, 3);
	discardRandom(testState.p1);
	RENDERER.render(testState);
	console.log(testState);
});