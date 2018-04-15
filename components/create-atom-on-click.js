AFRAME.registerComponent('create-atom-on-click', {
      schema: {},

      init: function () {
        var el = this.el;
        
        this.createAtom = function () {
          var camera = document.querySelector('a-camera');
          var entity = document.createElement('a-sphere');
          entity.setAttribute('drop-atom-on-click', '');
          entity.setAttribute('position', '0 0 -3');
          entity.setAttribute('radius', '0.5');
          entity.setAttribute('color', '#AAA');
          camera.appendChild(entity);
        }

        this.hideMenu = function () {
          var menu = document.querySelector('#menu');
          menu.setAttribute('visible', false);
        }

        this.showMenu = function () {
          var menu = document.querySelector('#menu');
          menu.setAttribute('visible', true);
        }

        el.addEventListener('click', this.createAtom);
        el.addEventListener('click', this.hideMenu);
        el.addEventListener('show-menu', this.showMenu);
      }
    });