AFRAME.registerComponent('drop-bond-on-click', {
    schema: {
        orientation: {type: 'string'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        this.dropBond = function (event) {
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('a-camera');
        var bond = camera.querySelector('a-cylinder');

        var entity = document.createElement('a-cylinder');
        entity.setAttribute('position', event.detail.intersection.point);
        entity.setAttribute('radius', '0.1');
        entity.setAttribute('height', '3');
        if (data.orientation == 'horizontal') {
            entity.setAttribute('rotation', '0 0 90');
        }
        entity.setAttribute('color', '#AAA');
        scene.appendChild(entity);
        camera.removeChild(bond);

      }

      this.createNewMenu = function () {
        var scene = document.querySelector('a-scene');
        var menu = document.createElement('a-box');
        menu.setAttribute('create-atom-buttons', '');
        menu.setAttribute('create-bond-buttons', '');
        menu.setAttribute('id', 'menu');
        menu.setAttribute('height', '5.2');
        menu.setAttribute('width', '4.5');
        menu.setAttribute('depth', '0.1');
        menu.setAttribute('color', '#EF2D5E');
        menu.setAttribute('opacity', '0.2');
        menu.setAttribute('position', '0 1 -4');
        scene.appendChild(menu);
      }

      el.addEventListener('click', this.dropBond);
      el.addEventListener('click', this.createNewMenu);
    }
  });
