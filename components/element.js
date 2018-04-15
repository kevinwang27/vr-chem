AFRAME.registerComponent('element', {
    schema: {
        name: {type: 'string', default: 'X'},
        radius: {type: 'number', default: 0},
        color: {type: 'color', default: '#AAA'}
    },

    init: function() {
        var data = this.data;
        var el = this.el;
        this.geometry = new THREE.SphereBufferGeometry(data.radius);
        this.material = new THREE.MeshStandardMaterial({color: data.color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        el.setObject3D('mesh', this.mesh);
    }
})
