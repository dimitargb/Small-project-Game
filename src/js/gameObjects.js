
function initGameObject(){
    const startScreeen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreeen,
        gameScreen,
        createWizard(initialState){
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.height = initialState.height + 'px';
            wizardElement.style.width = initialState.width + 'px';

            wizardElement.style.left = initialState.pozX + 'px';
            wizardElement.style.top = initialState.pozY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement);

            return wizardElement;
        }
    };
}