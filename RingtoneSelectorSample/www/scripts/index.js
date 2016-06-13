// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';
        //RingtoneSelector.open("Helloworld plugin.",
        //    function (message) {
        //        alert(message);

        //},
        //function () {
        //    alert("failed");
        //});
        var success = function (message) {
            cordova.plugins.notification.local.schedule({
                id: 1,
                text: "Single Notification",
                sound: message
            });
        }

        var failure = function () {
            alert("Error calling Hello Plugin");
        }

        cordova.plugins.RingtoneSelector.open("This is my plugin.", success, failure);
        console.log(cordova.plugins.RingtoneSelector);

        //content://media/internal/audio/media/47
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
