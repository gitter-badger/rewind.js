/**
*	Rewind.js
*	La evolución de los reproductores web
*	@author: Gerson Lázaro <http://www.gersonlazaro.com>
*	@Licencia: MIT
*/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rewind = (function () {
  function Rewind() {
    _classCallCheck(this, Rewind);

    this.players = [];
    this.init();
  }

  _createClass(Rewind, [{
    key: 'init',
    value: function init() {
      var videos = document.querySelectorAll("video");
      for (var i = 0; i < videos.length; i++) {
        this.players[i] = new Player(videos[i]);
      }
    }
  }]);

  return Rewind;
})();

var Player = (function () {
  function Player(video) {
    _classCallCheck(this, Player);

    this.parent = video.parentNode;
    this.video = new Video(video);
    this.createNode();
    this.insertNode();
    this.replaceNode();
  }

  _createClass(Player, [{
    key: 'createNode',
    value: function createNode() {
      this.container = document.createElement('div');
    }
  }, {
    key: 'insertNode',
    value: function insertNode() {
      this.parent.insertBefore(this.container, this.video.getDomElement);
    }
  }, {
    key: 'replaceNode',
    value: function replaceNode() {
      this.container.appendChild(this.video.getDomElement);
    }
  }]);

  return Player;
})();

var Video = (function () {
  function Video(video) {
    _classCallCheck(this, Video);

    this.domElement = video;
  }

  _createClass(Video, [{
    key: 'getDomElement',
    get: function get() {
      return this.domElement;
    }
  }]);

  return Video;
})();

window.onload = function () {
  var rewind = new Rewind();
};