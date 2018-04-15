AFRAME.registerComponent('atom', {
  schema: {
    sym: {type: 'string'},
    radius: {type: 'number'},
    color: {type: 'color'}
  },
  init: function () {
    let data = this.data;
    let el = this.el;
    let defaultColor = data.color;
    let selected = false;

    this.geometry = new THREE.SphereBufferGeometry(data.radius, 32, 32);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);

    el.setAttribute('class', 'atom');

    // let pos = el.object3D.position.x + ' ' + el.object3D.position.y + ' ' + (el.object3D.position.z);
    let html = '<a-text value="' + data.sym + '" align="center" color="#000" position="0 0 ' + data.radius +'" wrap-count="40"></a-text>';
    el.innerHTML = html;

    el.addEventListener('mouseenter', function () {
      el.setAttribute('scale', '1.1 1.1 1.1');
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('scale', '1 1 1');
    });
    el.addEventListener('click', function () {
      if (selected) {
        selected = false;
        el.setAttribute('atom', 'sym: ' + data.sym + '; radius: ' + data.radius + '; color: ' + defaultColor);
      } else {
        document.querySelectorAll('.atom').forEach(function(atom) {
          atom.emit('i_hear_click');
        });
        selected = true;
        el.setAttribute('atom', 'sym: ' + data.sym + '; radius: ' + data.radius + '; color: #ffff00');
      }
    });
    el.addEventListener('i_hear_click', function () {
      if (selected) {
        selected = false;
        el.setAttribute('atom', 'sym: ' + data.sym + '; radius: ' + data.radius + '; color: ' + defaultColor);
      }
    });
  },
  update: function (oldData) {
    // console.log(document.querySelector('a-camera').object3D.position.y);
    let data = this.data;
    this.el.getObject3D('mesh').material = new THREE.MeshStandardMaterial({color: data.color});
    // let html = '<a-text value="' + data.sym + '" align="center" color="#000" position="0 0 ' + data.radius +'" wrap-count="40"></a-text>';
    // el.innerHTML = html;
  }
});
