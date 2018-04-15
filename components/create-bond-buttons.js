AFRAME.registerComponent('create-menu', {
    schema: {},

    init: function () {
        var el = this.el;
        this.createTable = function (event) {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');

            <a-text create-periodic-table id="atom" value="atom" position="0 1 0" wrap-count=60 color="#000"></a-text>
            var head = document.createElement('a-text');
            head.setAttribute('create-bond-on-click', '');
            head.setAttribute('value', 'add single bond');
            head.setAttribute('position', '0, 0, 0');
            menu.appendChild(head);

            var elem1 = document.createElement('a-box');

            elem6.setAttribute('position', '1 2 0');
            elem6.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem6);
            var entityBr = document.createElement('a-text');
            entity.setAttribute('value', 'Br');
            elem6.appendChild(entityBr);

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
