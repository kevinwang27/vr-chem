AFRAME.registerComponent('create-periodic-table', {
    schema: {},

    init: function () {
        var el = this.el;
        

          this.createElems = function () {
              var el = this.el;
              var scene = document.querySelector('a-scene');
              var menu = document.querySelector('#periodic-table');

              var entityH = document.createElement('a-text');
              entity.setAttribute('create-atom-on-click', 'sym: H; radius: 0.3; color: #AAA');
              entity.setAttribute('value', 'H');
              entity.setAttribute('position', '-0.5 0.5 0');
              menu.appendChild(entityH);

              var entityC = document.createElement('a-text');
              entityC.setAttribute('create-atom-on-click', 'sym: C; radius: 0.5; color: #AAA');
              entityC.setAttribute('value', 'C');
              entityC.setAttribute('position', '0 0.5 0');
              entityC.setAttribute('color', '#000');
              menu.appendChild(entityC);

              var entityN = document.createElement('a-text');
              entity.setAttribute('create-atom-on-click', 'sym: N; radius: 0.5; color: #AAA');
              entity.setAttribute('value', 'N');
              entity.setAttribute('position', '0.5 0.5 0');
              entity.setAttribute('color', '#000');
              menu.appendChild(entityN);

              var entityO = document.createElement('a-text');
              entity.setAttribute('create-atom-on-click', 'sym: O; radius: 0.5; color: #AAA');
              entity.setAttribute('value', 'O');
              entity.setAttribute('position', '-0.5 0 1');
              entity.setAttribute('color', '#000');
              menu.appendChild(entityO);

              var entityCl = document.createElement('a-text');
              entity.setAttribute('create-atom-on-click', 'sym: Cl; radius: 0.7; color: #AAA');
              entity.setAttribute('value', 'Cl');
              entity.setAttribute('position', '0 0 0');
              entity.setAttribute('color', '#000');
              menu.appendChild(entityCl);

              var entityBr = document.createElement('a-text');
              entity.setAttribute('create-atom-on-click', 'sym: Br; radius: 0.7; color: #AAA');
              entity.setAttribute('value', 'Br');
              entity.setAttribute('position', '0.5 0 0');
              entity.setAttribute('color', '#000');
              menu.appendChild(entityBr);

              el.addEventListener('click', this.hideMenu);
          }
          this.createTable = function (event) {
            var scene = document.querySelector('a-scene');

            var entity = document.createElement('a-box');
            entity.setAttribute('id', 'periodic-table');
            entity.setAttribute('visible', 'true');
            entity.setAttribute('height', '1');
            entity.setAttribute('width', '2');
            entity.setAttribute('depth', '0.1');
            entity.setAttribute('color', '#EF2D5E');
            entity.setAttribute('opacity', '0.5');
            entity.setAttribute('position', '0 1 -2');
            scene.appendChild(entity);

            this.createElems();          
        }
          this.hideMenu = function () {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#periodic-table');
            scene.removeChild(menu);
         }

          el.addEventListener('click', this.createTable);
    }
  });
