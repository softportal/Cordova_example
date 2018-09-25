# Diseño De Infraestructura IOT

## Alumnos:
    - Sergio Semedi Barranco
    - Lucas Segarra Fernández

### Requirements:
- Android sdk
    - Emulador android adv instalado
- Cordova


### plugins usados:
    - hello World example plugin(https://github.com/don/cordova-plugin-hello)
    - Network information(https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-network-information/index.html)
    - Geolocation(https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/)
    - googlemaps(https://github.com/mapsplugin/cordova-plugin-googlemaps)


# CONTENT:

Aplicación cordova basica usando la plataforma android:
    * Aplicación con un menu básico (html + css) para probar las diferentes opciones:
        - Home: Portada de prueba usando cordova html.
        - test: Vista básica con botones con motivo de debug, usa plugins como hello world, o network information
                para comprobar la conexión.
        - Geo : LLamada al plugin geolocation y mostrando su valor por pantalla.
        - map : Mapa renderizado por google maps usando el plugin Geolocation para mostrar la ubicación usando una
                animación.
        - hide: Lógica básica para la vista de la aplicación que se dedica a mostrar y ocultar paneles.



# BUILD FROM SCRATCH:

```
    # Variables
    BUILD_DIR=p0dii
    API_KEY= #Write your api_key

    # Project init
    cordova create $BUILD_DIR com.example.p0_dii p0dii
    rm -r $BUILD_DIR/www
    cp -r www $BUILD_DIR/
    cd $BUILD_DIR

    # Platform
    cordova platform add android

    # Plugins:
    cordova plugin add https://github.com/don/cordova-plugin-hello.git
    cordova plugin add cordova-plugin-network-information
    cordova plugin add cordova-plugin-geolocation
    cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps\#multiple_maps  --variable API_KEY_FOR_ANDROID="$API_KEY"

    # Build and run
    cordova build
    cordova run
```


Note que para el correcto funcionamiento de cordova run, un emulador android con un avd espécifico debe estar instalado.



# TESTING PLATFORM:

- Nexus_6P_API_28

.Running standalone emulator using coldboot:

                    emulator -avd Nexus_6P_API_28 -no-snapshot


