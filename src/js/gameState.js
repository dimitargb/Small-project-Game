function initState(){
    const state = {
        player : 'Pesho',
        wizard: {
            width: 82,
            hight: 100,
            startX: Math.floor(Math.random()* 1000),
            startY: Math.floor(Math.random()* 400)
        },
        keys: {
            
        }
    }

    return state;
}