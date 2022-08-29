# Shop

Este proyecto fue realizado con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Enunciado
Vamos a crear el catálogo de una tienda en línea que ofrezca una gran variedad de productos. Los artículos se obtendrán a partir de la consulta a un servicio REST (mock) que puede ejecutarse de manera simultánea en el servidor local y que obtiene los datos de un archivo JSON.

Como requerimientos del sistema, se tiene lo siguiente:

Se deberían tener al menos 20 artículos cargados en el archivo JSON que servirá de base de datos (para obtener datos de prueba, se puede utilizar la librería Faker.js)
Los atributos que debería tener cada producto son: id (número identificador único), nombre, descripción, precio, cantidad. (puede tener una imagen, pero es opcional - referencia para imagenes aleatorias: Lorem picsum)
Se sugiere utilizar alguna librería o componente para elementos de interfaz gráfica (ej, Angular Material, Ng-Bootstrap)

## Configuraci+on
Corra `npm install` para actualizar las dependencias.

## Levantar servidor

###  Falsa API para consumo de datos 
Corra `npm run server` para desplegar la falsa API que contiene nuestros datos de la página y puede consultarla navegando a ` http://localhost:3000/products`. 

### Página web
Corra `ng serve` para desplegar la pagina en modo desarrollo y puede consultarla navegando a `http://localhost:4200/`. 