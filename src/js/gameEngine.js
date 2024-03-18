function startGame(state, game){
  
    game.createWizard(state.wizard);
     // Start Game
     window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){
    console.log(state.player);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}