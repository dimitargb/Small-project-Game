function initState(){

    let startX = Math.floor(Math.random()* 1000);
    let startY = Math.floor(Math.random()* 400);

    const state = {
        player : 'Pesho',
        wizard: {
            width: 82,
            hight: 100,
            pozX: startX,
            pozY: startY,
            speed: 10
        },

        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 7
        },

        keys: {
            KeyA: false,
            KeyW: false,
            KeyS: false,
            KeyD: false,
            Space: false
        }
    }

    return state;
}