# interview

## API
Desarrollar una API en NodeJS (con el framework que el desarrollador elija) que exponga los siguientes endpoints:

### GET /get_ford_cars
Devuelve una lista de autos cuya marca es "FORD".
Para obtener la lista de autos completa, consumir el endpoint /car_listing_presentation?list_length=100 (pasar 100 como parámetro).
La API a consumir tiene la siguiente URL de base: http://server.cocoche.com.ar
Aclaración:
El sistema de donde se obtiene la lista de autos, Cocoche, actualiza su base de autos todos los lunes a las 3am (tenerlo en cuenta).

### POST /create_user
El endpoint recibe como parámetro un JSON con el siguiente formato:
{
    "name": "string",
    "phone": "string",
    "email": "string",
}
Y devuelva otro JSON:
{
    "id": "string",
    "createdAt": "dd-mm-AAAA"
}

El sistema deberá persistir los 5 campos (3 del request + id random + fecha de creación).
Si el request intenta registrar un email existente, el sistema debe arrojar el error correspondiente.
Los usuarios creados deben ser guardados en una base de datos.
Especificar las credenciales de acceso a la base en este mismo archivo.
Usuario Admin:
Contraseña Admin:
Nombre de la BD:

## FRONT

### Vista
Replicar la vista que se observa en la imagen de este repositorio, llamada screen_1.jpg.
Realizar el front en VueJS (se puede usar Vuex o Nuxt u otro framework, a consideración del desarrollador). Se puede usar TS o JS.
Se pueden utilizar librerías como Bootstrap, Material Design, etc.
La lista de autos que se observa debe ser obtenida del endpoint desarrollado en el punto anterior (/get_ford_cars).
Tener en cuenta la paginación. El número máximo de autos a mostrar es 6 (2 filas de 3 autos cada una).
Considerar el caso en el cual el llamado a la API arroje un error o esté caída. Mostrar un error con formato de alert.

## ACLARACIONES
Todo el código debe ser subido a este repositorio. La parte del front en una carpeta llamada front y la del back, en un directorio llamado back.
Este código no puede ser subido a repositorios personales o de terceras partes.
Todo el código debe ser desarrollado en una rama aparte. Cuando se considere terminado, realizar un Merge Request (también llamado PR) sobre la rama Master, para ser aprobado.


