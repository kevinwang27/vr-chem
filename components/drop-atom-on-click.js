AFRAME.registerComponent('drop-atom-on-click', {
    schema: {},

    init: function () {
      var el = this.el;
      this.dropAtom = function (event) {
        var scene = document.querySelector('a-scene');
        var camera = document.querySelector('a-camera');
        var atom = camera.querySelector('a-sphere');

        var entity = document.createElement('a-sphere');
        console.log(event.detail.intersection.point);
        entity.setAttribute('position', event.detail.intersection.point);
        entity.setAttribute('radius', '0.5');
        entity.setAttribute('color', '#AAA');
        scene.appendChild(entity);

        camera.removeChild(atom);
      }

      el.addEventListener('click', this.dropAtom);
    }
  });