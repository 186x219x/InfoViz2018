function main()
{
    var volume = new KVS.CreateTornadoData( 64, 64, 64 );
    var screen = new KVS.THREEScreen();

    screen.init( volume );
    setup();
    screen.loop();

    function setup()
    {
        var color = new KVS.Vec3( 0, 0, 0 );
        var box = new KVS.BoundingBox();
        box.setColor( color );
        box.setWidth( 1 );

        var seed_point = volume.objectCenter();
        var streamline = new KVS.Streamline();
        streamline.setIntegrationStepLength( 1 );
        streamline.setIntegrationTime( 500 );
        streamline.setIntegrationMethod( KVS.Euler );
        streamline.setIntegrationDirection( KVS.BackwardDirection );
        streamline.setLineWidth( 100 );
        streamline.setSeedPoint( seed_point );

        var streamline2 = new KVS.Streamline();
        streamline2.setIntegrationStepLength( 20 );
        streamline2.setIntegrationTime( 500 );
        streamline2.setIntegrationMethod( KVS.RungeKutta2 );
        streamline2.setIntegrationDirection( KVS.BackwardDirection );
        streamline2.setLineWidth( 1 );
        streamline2.setSeedPoint( seed_point );

        var streamline3 = new KVS.Streamline();
        streamline3.setIntegrationStepLength( 5 );
        streamline3.setIntegrationTime( 100 );
        streamline3.setIntegrationMethod( KVS.RungeKutta4 );
        streamline3.setIntegrationDirection( KVS.BackwardDirection );
        streamline3.setLineWidth( 1 );
        streamline3.setSeedPoint( seed_point );


        var line1 = KVS.ToTHREELine( box.exec( volume ) );
        //var line2 = KVS.ToTHREELine( streamline.exec( volume ) );
        var line3 = KVS.ToTHREELine( streamline2.exec( volume ) );
        //var line4 = KVS.ToTHREELine( streamline3.exec( volume ) );
        screen.scene.add( line1 );
        //screen.scene.add( line2 );
        screen.scene.add( line3 );
        //screen.scene.add( line4 );
        screen.draw();

        document.addEventListener( 'mousemove', function() {
            screen.light.position.copy( screen.camera.position );
        });
    }
}
