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

        if (bond.getAttribute('color') !== '#00FF00') {
          return;
        }

        var entity = document.createElement('a-cylinder');
        var pos = bond.components['aabb-collider']['closestIntersectedEl'].getAttribute('position');
        entity.setAttribute('position', pos.x + ' ' + pos.y + 0.75 + ' ' + pos.z);
        entity.setAttribute('height', '1');
        entity.setAttribute('radius', '0.1');
        entity.setAttribute('height', '3');
        if (data.orientation == 'horizontal') {
            entity.setAttribute('rotation', '0 0 90');
        }
        entity.setAttribute('color', '#AAA');
        entity.setAttribute('aabb-collider', 'objects: #atom');

          entity.addEventListener('hitstart', function () {
            var intersecting_atom = entity.components['aabb-collider']['closestIntersectedEl'];
            entity.setAttribute('color', '#00FF00');
            var sym = intersecting_atom.getAttribute('atom')['sym'];
            intersecting_atom.setAttribute('atom', 'sym: ' + sym + '; radius: 0.5; color: #00FF00');
          });

          entity.addEventListener('hitend', function () {
            var intersecting_atom = entity.components['aabb-collider']['closestIntersectedEl'];
            entity.setAttribute('color', '#AAA');
            var sym = intersecting_atom.getAttribute('atom')['sym'];
            intersecting_atom.setAttribute('atom', 'sym: ' + sym + '; radius: 0.5; color: #AAA');
          });

        scene.appendChild(entity);
        camera.removeChild(bond);

      }

      this.createNewMenu = function () {
        var scene = document.querySelector('a-scene');
        var menu = document.createElement('a-box');
        var camera = document.querySelector('a-camera');
        var bond = camera.querySelector('a-cylinder');

        if (bond.getAttribute('color') !== '#00FF00') {
          return;
        }

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

      el.addEventListener('click', this.createNewMenu);
      el.addEventListener('click', this.dropBond);

    }
  });
