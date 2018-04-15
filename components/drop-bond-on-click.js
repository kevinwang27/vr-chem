AFRAME.registerComponent('drop-bond-on-click', {
    schema: {},

    init: function () {
      var el = this.el;
      this.dropBond = function (event) {
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('a-camera');
        var bond = camera.querySelector('a-cylinder');

        var entity = document.createElement('a-cylinder');
        entity.setAttribute('position', event.detail.intersection.point);
        entity.setAttribute('height', 3)
        entity.setAttribute('radius', '0.1');
        entity.setAttribute('color', '#AAA');
        scene.appendChild(entity);
        camera.removeChild(bond);
      }

      this.createNewMenu = function () {
        var scene = document.querySelector('a-scene');
        var menu = document.createElement('a-box');
        menu.setAttribute('create-bond-on-click', '');
        menu.setAttribute('id', 'menu');
        menu.setAttribute('height', '2');
        menu.setAttribute('width', '2');
        menu.setAttribute('depth', '0.1');
        menu.setAttribute('color', '#FFF145');
        menu.setAttribute('opacity', '0.2');
        menu.setAttribute('position', '2 1 -4');
        scene.appendChild(menu);
      }

      el.addEventListener('click', this.dropBond);
      el.addEventListener('click', this.createNewMenu);
    }
  });
