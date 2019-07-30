# :star: Solución del Laboratorio :star:
### Nombre: Angélica Arroyave Mendoza :octocat:
## Servicios
Para realizar el consumo de los datos del **owner** se realizaron los siguientes servicios:
**getAll():** Obtiene todos los owners. Ejecuta el método get de HTTP.  
**getOwner(dni):** Obtiene el owner identificado por el dni que ingresa por argumento. Ejecuta el método get de HTTP.  
**createOwner(owner):** Recibe como parámetro el nuevo owner. Ejecuta el método post de HTTP.  
**deleteOwner(href):** Recibe como parámetro el href que identifica al owner que lo tenga asociado. Ejecuta el método delete de HTTP.  
**updateOwner(href, owner):** Recibe como parámetros un href para identificar el owner que deseamos modificar por el segundo parámetro. Ejecuta el método put de HTTP.  

Todos estos esta localizados en la carpeta *"/shared/owner"*
## Componentes
Para desplegar la lista de *Owners*  se creó el componente **owner-list**.
Para editar, crear y eliminar un owner se creó el componente **owner-edit**.
Para desplegar la lista de *Owners X Cars* se creó el componente **car-for-owner**.

>**Nota [1]:** El componente car-edit fue editado para que desplegara la lista de Owners existentes y así poder asociar un owner a un car. Se implemento el método getAll() de owner services.
>**Nota [2]:** Para hacer el join entre los Owners y los Cars asociados a un Owner, se aplicó el método filter de javascript que devuelve un array de acuerdo a una condición, en este caso la condición establecida fue si el ownerDni del car era igual al dni del owner.
>**Nota[3]**: Como estuve presentando problemas en mi equipo para realizar el laboratorio, es normal que el usuario que aparezca haciendo los cambios sea alguien diferente a mi dado que el equipo me fue prestado. Si ha de ser necesario, puedo sustentar el laboratorio sin ningún inconveniente.



# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
