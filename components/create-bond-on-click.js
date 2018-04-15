AFRAME.registerComponent('create-bond-on-click', {
      schema: {},

      init: function () {
        var el = this.el;

        this.createBond = function () {
          var camera = document.querySelector('a-camera');
          var entity = document.createElement('a-cylinder');
          entity.setAttribute('drop-bond-on-click', '');
          entity.setAttribute('position', '0 0 -3');
          entity.setAttribute('height', '1');
          entity.setAttribute('radius', '0.1')
          entity.setAttribute('color', '#AAA');
          entity.setAttribute('aabb-collider', 'objects: #atom');

          var intersecting_atom;
          var sym;
          entity.addEventListener('hitstart', function () {
            intersecting_atom = entity.components['aabb-collider']['closestIntersectedEl'];
            entity.setAttribute('color', '#00FF00');
            sym = intersecting_atom.getAttribute('atom')['sym'];
            intersecting_atom.setAttribute('atom', 'sym: ' + sym + '; radius: 0.5; color: #00FF00');
          });

          entity.addEventListener('hitend', function () {
            entity.setAttribute('color', '#AAA');
            intersecting_atom.setAttribute('atom', 'sym: ' + sym + '; radius: 0.5; color: #AAA');
          });

          camera.appendChild(entity);
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
