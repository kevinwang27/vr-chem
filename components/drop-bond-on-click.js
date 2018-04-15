AFRAME.registerComponent('drop-bond-on-click', {
    schema: {},

    init: function () {
      var el = this.el;
      this.dropBond = function (event) {
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('a-camera');
        var bond = camera.querySelector('a-cylinder');

        var entity = document.createElement('a-cylinder');
        console.log(event.detail.intersection.point);
        entity.setAttribute('position', event.detail.intersection.point);
        entity.setAttribute('height', 3)
        entity.setAttribute('radius', '0.1');
        entity.setAttribute('color', '#AAA');
        scene.appendChild(entity);

        camera.removeChild(bond);
      }

      el.addEventListener('click', this.dropBond);
    }
  });
