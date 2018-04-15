AFRAME.registerComponent('drop-atom-on-click', {
    schema: {
        sym: {type: 'string'},
        radius: {type: 'number'},
        color: {type: 'color'}
    },

    init: function () {
        let data = this.data;
        var el = this.el;
        this.dropAtom = function (event) {
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('a-camera');
        var atom = camera.querySelector('a-entity');

        var entity = document.createElement('a-entity');
        entity.setAttribute('atom', 'sym: ' + data.sym +'; radius: ' + data.radius + '; color: ' + data.color);
        entity.setAttribute('position', event.detail.intersection.point);
        scene.appendChild(entity);
        camera.removeChild(atom);
      }

      this.createNewMenu = function () {
          var scene = document.querySelector('a-scene');
          var menu = document.createElement('a-box');
          menu.setAttribute('create-atom-buttons', '');
          menu.setAttribute('create-bond-buttons', '');
          menu.setAttribute('id', 'menu');
          menu.setAttribute('height', '5');
          menu.setAttribute('width', '3');
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
