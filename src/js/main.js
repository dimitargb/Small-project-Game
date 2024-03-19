let state = initState();
let game = initGameObject();


const availableKeys = ['KeyA', 'KeyS','KeyD','KeyW','Space'];


document.addEventListener('keydown', (e)=>{

    if(availableKeys.includes(e.code)){
        state.keys[e.code] = true;
    }
    //console.log(e.code);
    
});

document.addEventListener('keyup', (e)=>{

    if(availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    }
    //console.log(e.code);
    
})

game.startScreeen.addEventListener('click', (e) =>{
    game.startScreeen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    // Start Game
    startGame(state, game);
});