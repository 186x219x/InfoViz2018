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
$(function() {
  var volume = new KVS.LobsterData();
  var screen = new KVS.THREEScreen();
  screen.init(volume, {
    width: window.innerWidth / 2,
    height: window.innerHeight,
    enableAutoResize: false
  });

  var bounds = Bounds(volume);
  screen.scene.add(bounds);

  var isovalue = 128;
  var surfaces = Isosurfaces(volume, isovalue);
  screen.scene.add(surfaces);

  document.addEventListener('mousemove', function() {
    screen.light.position.copy(screen.camera.position);
  });

  window.addEventListener('resize', function() {
    screen.resize([window.innerWidth, window.innerHeight]);
  });

  screen.loop();

  //isosurfaceを変更して再描画
  $('#iso_score').html($('#iso_bar').val());
  $('#iso_bar').on('input change', function() {
    $('#iso_score').html($(this).val());
    screen.scene.remove(surfaces);
    isovalue = $(this).val();
    surfaces = Isosurfaces(volume, isovalue);
    screen.scene.add(surfaces);
  });

  //Redを変更して再描画
  $('#R_score').html($('#R_bar').val());
  $('#R_bar').on('input change', function() {
    $('#R_score').html($(this).val());
    screen.scene.remove(surfaces);
    r_value = $(this).val();
    changeRedColor(r_value)
    surfaces = Isosurfaces(volume, isovalue);
    screen.scene.add(surfaces);
  });

  //Blueを変更して再描画
  $('#B_score').html($('#B_bar').val());
  $('#B_bar').on('input change', function() {
    $('#B_score').html($(this).val());
    screen.scene.remove(surfaces);
    b_value = $(this).val();
    changeBlueColor(b_value)
    surfaces = Isosurfaces(volume, isovalue);
    screen.scene.add(surfaces);
  });

  //Greenを変更して再描画
  $('#G_score').html($('#G_bar').val());
  $('#G_bar').on('input change', function() {
    $('#G_score').html($(this).val());
    screen.scene.remove(surfaces);
    g_value = $(this).val();
    changeGreenColor(g_value)
    surfaces = Isosurfaces(volume, isovalue);
    screen.scene.add(surfaces);
  });

});
