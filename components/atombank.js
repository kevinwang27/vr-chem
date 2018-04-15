AFRAME.registerComponent('atombank', {
	schema: {
    color: {default: '#FFF'},
    width: {type: 'int', default: 5}
    opacity: {type: 'double', default = 0.5}
  	}
  	init: function () {
  		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
		var cube = new THREE.Mesh( geometry, material );
		scene.add( cube );
  	}
});