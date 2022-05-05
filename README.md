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

| Endpoint                                             | Ejemplo                                         | 
| :---                                                 |    :----:                                       |
| http://localhost:3000/v1/students/:studentname       | http://localhost:3000/v1/students/Bennett       |
| http://localhost:3000/v1/students/credits/:credits   | http://localhost:3000/v1/students/credits/900   |
| http://localhost:3000/v1/students/certifications/:certification   | http://localhost:3000/v1/students/certifications/true   |

![student_js](https://user-images.githubusercontent.com/26264385/166848347-82ce8082-2e16-4fb2-a0c5-4ad3dfa4af81.gif)
