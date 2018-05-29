/*
function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight/2,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}
*/
$(function () {
  var volume = new KVS.LobsterData();
  var screen = new KVS.THREEScreen();
  screen.init( volume, {
      width: window.innerWidth,
      height: window.innerHeight/2,
      enableAutoResize: false
  });

  var bounds = Bounds( volume );
  screen.scene.add( bounds );

  var isovalue = 128;
  var surfaces = Isosurfaces( volume, isovalue );
  screen.scene.add( surfaces );

  document.addEventListener( 'mousemove', function() {
      screen.light.position.copy( screen.camera.position );
  });

  window.addEventListener( 'resize', function() {
      screen.resize( [ window.innerWidth, window.innerHeight ] );
  });

  screen.loop();

  // 初期
  $('#iso_score').html($('#iso_bar').val());
  $('#iso_bar').on('input change', function() {
    // 変動
    $('#iso_score').html($(this).val());
    screen.scene.remove(surfaces);
    isovalue = $(this).val();
    surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );
  });

  $('#R_score').html($('#R_bar').val());
  $('#R_bar').on('input change', function() {
    // 変動
    $('#R_score').html($(this).val());
    screen.scene.remove(surfaces);
    rvalue = $(this).val();
    changeRedColor(rvalue)
    surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );
  });
});
