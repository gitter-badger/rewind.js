/**
*	Rewind.js
*	La evolución de los reproductores web
*	@author: Gerson Lázaro <http://www.gersonlazaro.com>
*	@Licencia: MIT
*/

'use strict';


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

class Player {
	constructor(video) {
		this.parent = video.parentNode;
        this.video = new Video(video);
        this.createNode();
        this.insertNode();
        this.replaceNode();
    }

    createNode(){
    	this.container = document.createElement('div');
    }

    insertNode(){
   		this.parent.insertBefore(this.container, this.video.getDomElement);
    }
    replaceNode(){
    	this.container.appendChild(this.video.getDomElement);
    }
}

class Video {
	constructor(video){
		this.domElement = video;
	}
	get getDomElement(){
		return this.domElement;
	}
	
	
}

window.onload = function () {
	var rewind = new Rewind();
}