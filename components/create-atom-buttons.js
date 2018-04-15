AFRAME.registerComponent('create-menu', {
    schema: {},

    init: function () {
        var el = this.el;
        this.createTable = function (event) {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');

            <a-text create-periodic-table id="atom" value="atom" position="0 1 0" wrap-count=60 color="#000"></a-text>
            var head = document.createElement('a-text');
            head.setAttribute('value', 'add atom');
            head.setAttribute('position', '0, 4, 0');
            menu.appendChild(head);

            var elem1 = document.createElement('a-box');
            elem1.setAttribute('create-atom-on-click', 'sym: H; radius: 0.3; color: #AAA');
            elem1.setAttribute('position', '-1 3 0');
            elem1.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem1);
            var entityH = document.createElement('a-text');
            entity.setAttribute('value', 'H');
            elem1.appendChild(entityH);

            var elem1 = document.createElement('a-box');
            elem2.setAttribute('create-atom-on-click', 'sym: C; radius: 0.5; color: #AAA');
            elem2.setAttribute('position', '0 3 0');
            elem2.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem2);
            var entityC = document.createElement('a-box');
            entityC.setAttribute('value', 'C');
            elem2.appendChild(entityC);

            var elem1 = document.createElement('a-box');
            elem3.setAttribute('create-atom-on-click', 'sym: N; radius: 0.5; color: #AAA');
            elem3.setAttribute('position', '1 3 0');
            elem3.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem3);
            var entityN = document.createElement('a-box');
            entity.setAttribute('value', 'N');
            elem3.appendChild(entityN);

            var elem1 = document.createElement('a-box');
            elem4.setAttribute('create-atom-on-click', 'sym: O; radius: 0.5; color: #AAA');
            elem4.setAttribute('position', '-1 2 0');
            elem4.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem4);
            var entityO = document.createElement('a-box');
            entity.setAttribute('value', 'O');
            elem4.appendChild(entityO);

            var elem1 = document.createElement('a-box');
            elem5.setAttribute('create-atom-on-click', 'sym: Cl; radius: 0.7; color: #AAA');
            elem5.setAttribute('position', '0 2 0');
            elem5.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem5);
            var entityCl = document.createElement('a-text');
            entity.setAttribute('value', 'Cl');
            elem5.appendChild(entityCl);

            var elem1 = document.createElement('a-box');
            elem6.setAttribute('create-atom-on-click', 'sym: Br; radius: 0.7; color: #AAA');
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
