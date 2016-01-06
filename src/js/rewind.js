/**
*	Rewind.js
*	La evolución de los reproductores web
*	@author: Gerson Lázaro <http://www.gersonlazaro.com>
*	@Licencia: MIT
*/

'use strict';

window.onload = function () {
	var rewind = new Rewind();
}

class Rewind {
    constructor() {
    	this.players = [];
		this.init();        
    }
    

    init(){
    	var videos = document.querySelectorAll("video");
    	for(var i = 0; i < videos.length; i++){
    		this.players[i] = new Player(videos[i]);
    	}
    }

}



