
AFRAME.registerComponent('alpha-test', {
    dependencies: ['material'],
    init: function () {
        console.log("okok");
        var material = this.el.getObject3D('mesh').material;
        material.alphaTest = 0.5;
        material.needsUpdate = true;
    }
});