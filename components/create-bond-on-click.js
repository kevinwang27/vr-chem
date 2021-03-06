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
                entity.setAttribute('height', '1');
                entity.setAttribute('radius', '0.1');
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
            } else {
                var camera = document.querySelector('a-camera');
                var entity = document.createElement('a-cylinder');
                entity.setAttribute('drop-bond-on-click', 'orientation: horizontal');
                entity.setAttribute('position', '0 0 -3');
                entity.setAttribute('height', '1');
                entity.setAttribute('radius', '0.1');
                entity.setAttribute('rotation', '0 0 90');
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
