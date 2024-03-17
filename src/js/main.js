const startScreeen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');

startScreeen.addEventListener('click', (e) =>{
    console.log('Start Game');

    e.currentTarget.classList.add('hidden');

    gameScreen.classList.remove('hidden');
});