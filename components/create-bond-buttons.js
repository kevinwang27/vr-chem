AFRAME.registerComponent('create-bond-buttons', {
    schema: {},

    init: function () {
        var el = this.el;
        this.createTable = function () {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');

            var head = document.createElement('a-text');
            head.setAttribute('create-bond-on-click', '');
            head.setAttribute('value', 'add single bond');
            head.setAttribute('position', '0, 0, 0');
            menu.appendChild(head);

            el.addEventListener('click', this.hideMenu);
        }

          this.hideMenu = function () {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');
            scene.removeChild(menu);
         }

         this.createTable();
    }
  });
