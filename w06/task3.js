

function main()
{
    var width = 500;
    var height = 500;

    var scene_Gouraud_Blinn_Phong = new THREE.Scene();
    var scene_Phong_Blinn_Phong = new THREE.Scene();

    var fov = 50;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene_Gouraud_Blinn_Phong.add( camera );
    scene_Phong_Blinn_Phong.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene_Gouraud_Blinn_Phong.add( light );
    scene_Phong_Blinn_Phong.add( light );

    var renderer_Gouraud_Blinn_Phong = new THREE.WebGLRenderer();
    renderer_Gouraud_Blinn_Phong.setSize( width, height );
    document.body.appendChild( renderer_Gouraud_Blinn_Phong.domElement );

    var renderer_Phong_Blinn_Phong = new THREE.WebGLRenderer();
    renderer_Phong_Blinn_Phong.setSize( width, height );
    document.body.appendChild( renderer_Phong_Blinn_Phong.domElement );

    var p1 = document.createElement('p');
    p1.innerHTML = "These two are using Blinn-Phong reflection."
    +"<br>"
    +"The left is using Gouraud shading."
    +"<br>"
    +"The light is using Phong shading.";
    document.body.appendChild( p1 );

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material_Gouraud_Blinn_Phong = new THREE.ShaderMaterial({
      vertexColors: THREE.VertexColors,
      vertexShader: document.getElementById('Gouraud_Blinn_Phong.vert').text,
      fragmentShader:document.getElementById('Gouraud_Blinn_Phong.frag').text
    });


    var material_Phong_Blinn_Phong = new THREE.ShaderMaterial({
      vertexColors: THREE.VertexColors,
      vertexShader: document.getElementById('Phong_Blinn_Phong.vert').text,
      fragmentShader:document.getElementById('Phong_Blinn_Phong.frag').text
    });

    var torus_knot_Gouraud_Blinn_Phong = new THREE.Mesh( geometry, material_Gouraud_Blinn_Phong );
    var torus_knot_Phong_Blinn_Phong = new THREE.Mesh( geometry, material_Phong_Blinn_Phong );
    scene_Gouraud_Blinn_Phong.add( torus_knot_Gouraud_Blinn_Phong );
    scene_Phong_Blinn_Phong.add( torus_knot_Phong_Blinn_Phong );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot_Gouraud_Blinn_Phong.rotation.x += 0.01;
        torus_knot_Gouraud_Blinn_Phong.rotation.y += 0.01;
        torus_knot_Phong_Blinn_Phong.rotation.x += 0.01;
        torus_knot_Phong_Blinn_Phong.rotation.y += 0.01;
        renderer_Gouraud_Blinn_Phong.render( scene_Gouraud_Blinn_Phong, camera );
        renderer_Phong_Blinn_Phong.render( scene_Phong_Blinn_Phong, camera );
    }
}
