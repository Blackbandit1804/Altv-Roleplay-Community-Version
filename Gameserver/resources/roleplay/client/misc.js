import alt from 'alt-client';
import game from 'natives';

alt.setInterval(() => {
    game.invalidateIdleCam(); 
    game.invalidateVehicleIdleCam();
}, 20000);
