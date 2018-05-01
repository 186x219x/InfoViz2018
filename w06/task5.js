

function main()
{
    var width = 500;
    var height = 500;

    var scene_Gouraud_Toon = new THREE.Scene();
    var scene_Phong_Toon = new THREE.Scene();

    var fov = 50;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene_Gouraud_Toon.add( camera );
    scene_Phong_Toon.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene_Gouraud_Toon.add( light );
    scene_Phong_Toon.add( light );

    var renderer_Gouraud_Toon = new THREE.WebGLRenderer();
    renderer_Gouraud_Toon.setSize( width, height );
    document.body.appendChild( renderer_Gouraud_Toon.domElement );

    var renderer_Phong_Toon = new THREE.WebGLRenderer();
    renderer_Phong_Toon.setSize( width, height );
    document.body.appendChild( renderer_Phong_Toon.domElement );

    var p1 = document.createElement('p');
    p1.textContent = 'These two are Phong shading.';
    document.body.appendChild( p1 );

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material_Gouraud_Toon = new THREE.ShaderMaterial({
      vertexColors: THREE.VertexColors,
      vertexShader: document.getElementById('Gouraud_Toon.vert').text,
      fragmentShader:document.getElementById('Gouraud_Toon.frag').text
    });


    var material_Phong_Toon = new THREE.ShaderMaterial({
      vertexColors: THREE.VertexColors,
      vertexShader: document.getElementById('Phong_Toon.vert').text,
      fragmentShader:document.getElementById('Phong_Toon.frag').text
    });

    var torus_knot_Gouraud_Toon = new THREE.Mesh( geometry, material_Gouraud_Toon );
    var torus_knot_Phong_Toon = new THREE.Mesh( geometry, material_Phong_Toon );
    scene_Gouraud_Toon.add( torus_knot_Gouraud_Toon );
    scene_Phong_Toon.add( torus_knot_Phong_Toon );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot_Gouraud_Toon.rotation.x += 0.01;
        torus_knot_Gouraud_Toon.rotation.y += 0.01;
        torus_knot_Phong_Toon.rotation.x += 0.01;
        torus_knot_Phong_Toon.rotation.y += 0.01;
        renderer_Gouraud_Toon.render( scene_Gouraud_Toon, camera );
        renderer_Phong_Toon.render( scene_Phong_Toon, camera );
    }
}
