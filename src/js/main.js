let state = initState();
let game = initGameObject();

game.startScreeen.addEventListener('click', (e) =>{
    game.startScreeen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    // Start Game
    startGame(state, game);
});