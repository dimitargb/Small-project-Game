let state = initState();
let game = initGameObject();

game.startScreeen.addEventListener('click', (e) =>{
    console.log('Start Game');

    game.startScreeen.classList.add('hidden');

    game.gameScreen.classList.remove('hidden');
});