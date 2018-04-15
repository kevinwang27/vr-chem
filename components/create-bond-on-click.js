AFRAME.registerComponent('create-bond-on-click', {
      schema: {
          orientation: {type: 'string'}
      },

      init: function () {
        var el = this.el;
        var data = this.data;

        this.createBond = function () {
            if (data.orientation == 'vertical') {
                var camera = document.querySelector('a-camera');
                var entity = document.createElement('a-cylinder');
                entity.setAttribute('drop-bond-on-click', 'orientation: vertical');
                entity.setAttribute('position', '0 0 -3');
                entity.setAttribute('height', '3');
                entity.setAttribute('radius', '0.1');
                entity.setAttribute('color', '#AAA');
                camera.appendChild(entity);
            } else {
                var camera = document.querySelector('a-camera');
                var entity = document.createElement('a-cylinder');
                entity.setAttribute('drop-bond-on-click', 'orientation: horizontal');
                entity.setAttribute('position', '0 0 -3');
                entity.setAttribute('height', '3');
                entity.setAttribute('radius', '0.1');
                entity.setAttribute('rotation', '0 0 90');
                entity.setAttribute('color', '#AAA');
                camera.appendChild(entity);
            }
        }

        this.hideMenu = function () {
          var scene = document.querySelector('a-scene');
          var menu = document.querySelector('#menu');
          scene.removeChild(menu);
        }

        el.addEventListener('click', this.createBond);
        el.addEventListener('click', this.hideMenu);
      }
    });
