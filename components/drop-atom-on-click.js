AFRAME.registerComponent('drop-atom-on-click', {
    schema: {},

    init: function () {
      var el = this.el;
      this.dropAtom = function (event) {
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('a-camera');
        var atom = camera.querySelector('a-entity');

        var entity = document.createElement('a-entity');
        entity.setAttribute('drop-atom-on-click', '');
        entity.setAttribute('atom', 'sym: C; radius: 0.5; color: #AAA');
        entity.setAttribute('position', '0 0 -3');
        scene.appendChild(entity);
        camera.removeChild(atom);
      }

      this.createNewMenu = function () {
        var scene = document.querySelector('a-scene');
        var menu = document.createElement('a-box');
        menu.setAttribute('create-atom-on-click', '');
        menu.setAttribute('id', 'atom-menu');
        menu.setAttribute('height', '2');
        menu.setAttribute('width', '2');
        menu.setAttribute('depth', '0.1');
        menu.setAttribute('color', '#EF2D5E');
        menu.setAttribute('opacity', '0.2');
        menu.setAttribute('position', '0 1 -4');
        scene.appendChild(menu);
      }
      el.addEventListener('click', this.dropAtom);
      el.addEventListener('click', this.createNewMenu);
    }
  });