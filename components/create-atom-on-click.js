AFRAME.registerComponent('create-atom-on-click', {
      schema: {
          sym: {type: 'string'},
          radius: {type: 'number'},
          color: {type: 'color'}
      },

      init: function () {
        let data = this.data;
        var el = this.el;

        this.createAtom = function () {
          var camera = document.querySelector('a-camera');
          var entity = document.createElement('a-entity');
          entity.setAttribute('drop-atom-on-click', 'sym: ' + data.sym +'; radius: ' + data.radius + '; color: ' + data.color);
          entity.setAttribute('atom', 'sym: ' + data.sym +'; radius: ' + data.radius + '; color: ' + data.color);
          entity.setAttribute('position', '0 0 -3');
          camera.appendChild(entity);
        }

        this.hideMenu = function () {
          var scene = document.querySelector('a-scene');
          var menu = document.querySelector('#menu');
          scene.removeChild(menu);
        }

        el.addEventListener('click', this.createAtom);
        el.addEventListener('click', this.hideMenu);
      }
    });
