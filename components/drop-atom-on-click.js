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
        var pos = atom.components['aabb-collider']['closestIntersectedEl'].getAttribute('position');
        entity.setAttribute('position', pos.x + ' ' + (pos.y + 0.75) + ' ' + pos.z);
        entity.setAttribute('id', 'atom');
        entity.setAttribute('aabb-collider', 'objects: a-cylinder');

        entity.addEventListener('hitstart', function () {
            var intersecting_bond = entity.components['aabb-collider']['closestIntersectedEl'];
          entity.setAttribute('atom', 'sym: ' + data.sym + '; radius: ' + data.radius + '; color: #00FF00');
          intersecting_bond.setAttribute('color', '#00FF00');
        });

        entity.addEventListener('hitend', function () {
            var intersecting_bond = entity.components['aabb-collider']['closestIntersectedEl'];
          entity.setAttribute('atom', 'sym: ' + data.sym + '; radius: ' + data.radius + '; color: #AAA');
          intersecting_bond.setAttribute('color', '#AAA');
        });

        scene.appendChild(entity);
        camera.removeChild(atom);
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
      el.addEventListener('click', this.dropAtom);
      el.addEventListener('click', this.createNewMenu);      
    }
  });
