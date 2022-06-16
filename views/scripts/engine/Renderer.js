class Renderer{

    render(state){
        $('#board').append('</br><span>' + state.p1.character.name + ' vs ' + 
        state.p2.character.name +'</span>');
        for (let i = 0; i < 9; i++){
            let appendStr = '<div>' + i + ': ';
            if (state.p1.position == i){
                appendStr += state.p1.character.name;
            } else if (state.p2.position == i){
                appendStr += state.p2.character.name;
            }
            $('#board').append(appendStr + '</div>');
        }
    }
}