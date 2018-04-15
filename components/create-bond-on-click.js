AFRAME.registerComponent('create-bond-on-click', {
      schema: {},

      init: function () {
        var el = this.el;

        this.createBond = function () {
          var camera = document.querySelector('a-camera');
          var entity = document.createElement('a-cylinder');
          entity.setAttribute('drop-bond-on-click', '');
          entity.setAttribute('position', '0 0 -3');
          entity.setAttribute('height', '3');
          entity.setAttribute('radius', '0.1')
          entity.setAttribute('color', '#AAA');
          camera.appendChild(entity);
        }

        this.hideMenu = function () {
          var menu = document.querySelector('#bond-menu');
          menu.setAttribute('visible', false);
        }

        this.showMenu = function () {
          var menu = document.querySelector('#bond-menu');
          menu.setAttribute('visible', true);
        }

        el.addEventListener('click', this.createBond);
        el.addEventListener('click', this.hideMenu);
        el.addEventListener('show-menu', this.showMenu);
      }
    });
