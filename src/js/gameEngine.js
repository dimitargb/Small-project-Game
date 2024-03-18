function startGame(state, game){
  
    game.createWizard(state.wizard);
     // Start Game
     window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){
    const { wizard } = state;
    const { wizardElement } = game;

    // Move wizard
    if(state.keys.KeyA){
        wizard.pozX -= wizard.speed;
    }

    if(state.keys.KeyS){
        wizard.pozY += wizard.speed;
    }

    if(state.keys.KeyD){
        wizard.pozX += wizard.speed;
    }

    if(state.keys.KeyW){
        wizard.pozY -= wizard.speed;
    }

    wizardElement.style.left = wizard.pozX + 'px'; 
    wizardElement.style.top = wizard.pozY + 'px';


    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}