# Student-JS
Proyecto en Node JS y exposición de API a través de Express Server

# ¿Qué contiene?
- JavaScript
- Node
- Express Server
- Jest
- Eslint

# ¿Cómo funciona?
Para iniciar la aplicación es necesario correr contar con [NodeJS](https://nodejs.org/es/), contando con esta herramienta debemos ejecutar el siguiente comando en el terminal de tu equipo:
`npm run server`

Una vez iniciado el aplicativo, veremos en consola el siguiente mensaje:

![image](https://user-images.githubusercontent.com/26264385/166847229-3123dc05-68c9-4ec3-9931-27e082856534.png)

# Consumiendo el API
Con la aplicación iniciada, debemos ir a nuestro navegador o aplicación cliente de API de nuestra preferencia, por ejemplo [Postman](https://www.postman.com/), en este proyecto contamos con los siguientes puntos de consumo:

| Endpoint                                             | Método HTTP | Ejemplo                                                 | 
| :---                                                 |    :----:   | :---                                                    |
| /v1/students/:studentname                            | GET         | http://localhost:3000/v1/students/Bennett               |
| /v1/students/credits/:credits                        | GET         | http://localhost:3000/v1/students/credits/900           |
| /v1/students/certifications/:certification           | GET         | http://localhost:3000/v1/students/certifications/true   |
<p align='center'>
  
![student_js](https://user-images.githubusercontent.com/26264385/166848347-82ce8082-2e16-4fb2-a0c5-4ad3dfa4af81.gif)
 
</p>

# Estructura del proyecto
<p align='center'>
  
![image](https://user-images.githubusercontent.com/26264385/166850563-0416ad91-261e-48d6-945a-d93319b365c3.png)

</p>
Contamos un archivo de datos JSON, el cual tiene el nombre `visualpartners.json`. Dicho archivo será leido por la clase Reader y la biblioteca File System, para manipular el contenido es enviado a la clase StudentService. El cual contiene toda la lógica para aplicar los filtros sobre la colección de datos.

# Pruebas con Jest
<p style="text-align:center">El software lleva pruebas y punto...</p>

Como una buena práctica, debemos realizar pruebas de nuestro código. Para ello contamos con múltiples herramientas, en este proyecto se utilizó [Jest](https://jestjs.io/) y para ejecutar las pruebas ejecutaremos en nuestro terminal `npm test`
![student_test_js](https://user-images.githubusercontent.com/26264385/166851290-bddcb432-771b-42d8-bb9e-9971028763c7.gif)

Si todo funciona bien, no te fies, una prueba que no falla al menos una vez, no es óptima.
