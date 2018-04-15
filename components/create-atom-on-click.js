AFRAME.registerComponent('create-atom-on-click', {
      schema: {},

      init: function () {
        var el = this.el;

        this.createAtom = function () {
          var camera = document.querySelector('a-camera');
          var entity = document.createElement('a-entity');
          entity.setAttribute('drop-atom-on-click', '');
          entity.setAttribute('atom', 'sym: C; radius: 0.5; color: #AAA');
          entity.setAttribute('position', '0 0 -3');
          camera.appendChild(entity);
        }

        this.hideMenu = function () {
          var scene = document.querySelector('a-scene');
          var menu = document.querySelector('#atom-menu');
          scene.removeChild(menu);
        }

        el.addEventListener('click', this.createAtom);
        el.addEventListener('click', this.hideMenu);
      }
    });
