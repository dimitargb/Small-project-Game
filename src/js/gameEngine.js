function startGame(state, game){
  
    game.createWizard(state.wizard);
     // Start Game
     window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){
    const { wizard } = state;
    const { wizardElement } = game;

    // Move wizard
    if(state.keys.KeyD){
        wizard.pozX += 2;
    }

    wizardElement.style.left = wizard.pozX + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}