AFRAME.registerComponent('create-bond-buttons', {
    schema: {},

    init: function () {
        var el = this.el;
        this.createTable = function (event) {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');

            var elem = document.createElement('a-box');
            elem.setAttribute('create-bond-on-click', '');
            elem.setAttribute('position', '0 0 0');
            elem.setAttribute('depth', '0.1');
            elem.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem);
            var head = document.createElement('a-text');
            head.setAttribute('value', 'add single bond');
            menu.appendChild(head);

            el.addEventListener('click', this.hideMenu);
        }();

          this.hideMenu = function () {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');
            scene.removeChild(menu);
         }
    }
  });
