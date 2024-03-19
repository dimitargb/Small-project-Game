function startGame(state, game){
  
    game.createWizard(state.wizard);
     // Start Game
     window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp){
    const { wizard } = state;
    const { wizardElement } = game;

   modifyWizardPosition(state, game)

   if(state.keys.Space){
    game.wizardElement.style.backgroundImage = 'url("/src/images/wizard-fire.png")';
   } else {
    game.wizardElement.style.backgroundImage = 'url("/src/images/wizard.png")';
   }

   //Spawn bugs

   if(timestamp > state.bugStats.nextSpawnTimestamp){
    game.createBug(state.bugStats);
    state.bugStats.nextSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
   }

   //Render bugs
   document.querySelectorAll('.bug').forEach(bug =>{
     let pozX = parseInt(bug.style.left);

     if(pozX > 0){
        bug.style.left = pozX - state.bugStats.speed + 'px';
     }
        else {
            bug.remove();
        }
   })

   // Render wizard
    wizardElement.style.left = wizard.pozX + 'px'; 
    wizardElement.style.top = wizard.pozY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

    function modifyWizardPosition(state, game){

        const { wizard } = state;
        // Move wizard
        if(state.keys.KeyA){
            wizard.pozX =  Math.max(wizard.pozX - wizard.speed, 0);
        }

        if(state.keys.KeyS){
            wizard.pozY = Math.min(wizard.pozY + wizard.speed, game.gameScreen.offsetHeight - wizard.hight);
        }

        if(state.keys.KeyD){
            wizard.pozX = Math.min(wizard.pozX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
        }

        if(state.keys.KeyW){
            wizard.pozY = Math.max(wizard.pozY - wizard.speed, 0)
    }
}