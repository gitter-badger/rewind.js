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