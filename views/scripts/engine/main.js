// On page load
$(document).ready(function(){
    const RENDERER = new Renderer();
    let testNormal = new Card('Dive', 'Before: Advance 3. If you moved past the opponent, their attacks do not hit you.',
         CardType.Normal);
    let testCharacter1 = new Card('Ryu', 'As an action, you may Move 1', CardType.Character);
    let testCharacter2 = new Card('Ken', 'As an action, you may Close 1 and draw a card',
         CardType.Character);
    let testState = new GameState(
        new Player(testCharacter1, 2, [testNormal, testNormal, testNormal]),
        new Player(testCharacter2, 6, [testNormal, testNormal, testNormal]),
        null
    );
    RENDERER.render(testState);
    retreat(testState.p1, testState.p2, 8);
    RENDERER.render(testState);
});