# Rubiko Basic Docker

Este repositorio contiene los archivos necesarios para lanzar un contenedor Docker con un servidor básico de Node.js.

## Contenido del repositorio

- `Dockerfile`: Archivo de configuración para construir la imagen Docker de la aplicación.
- `docker-compose.yml`: Archivo de configuración para lanzar la aplicación utilizando Docker Compose.
- `server.js`: Archivo que configura un servidor Express en Node.js que responde a solicitudes en el puerto 5000, y llama a las funciones correspondientes, declaradas en el archivo `app.js`.
- `app.js`: Archivo que contiene las funciones para verificar la salud del servicio y manejar páginas no encontradas.
- `package.json y package-lock.json`: Archivos JSON de configuración.
- `.gitignore`: Archivo .gitignore para especificar que archivos y directorios debe ignorar el sistema de control de versiones Git.
- `prettierc`: Archivo de configuración de Prettier.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Docker en tu sistema. Si aún no lo tienes instalado, puedes seguir las instrucciones en [la página oficial de Docker](https://docs.docker.com/get-docker/) para instalarlo.

## Cómo lanzar el contenedor con Docker

Sigue estos pasos para construir y lanzar un contenedor Docker con la aplicación rubiko-basic-docker:

1. Clona este repositorio en tu sistema local:

   `git clone https://github.com/PaoloTroni/rubiko-basic-docker.git`

2. Navega al directorio del repositorio:

   `cd rubiko-basic-docker`

3. Construye la imagen Docker utilizando el Dockerfile proporcionado:

   `docker build -t rubiko-basic-docker .`

4. Lanza un contenedor a partir de la imagen recién creada:

   `docker run -p 5050:5000 rubiko-basic-docker`

5. Abre tu navegador web y accede a `http://localhost:5050/health` para visualizar el resultado de la aplicación.

6. Si deseas visualizar un mensage personalizado, puedes levantar el contenedor con el siguiente comando:

   `docker run -p 5050:5000 -e GREETINGS="Hello Rubiko Tech!" rubiko-basic-docker`

## Cómo lanzar el Docker Compose

Si prefieres utilizar Docker Compose para gestionar la aplicación, sigue estos pasos:

1. Asegúrate de haber clonado el repositorio y de estar en él. Mira los puntos 1 y 2 del bloque "Cómo lanzar el contenedor con Docker"

2. Ejecuta el siguiente comando para lanzar la aplicación utilizando Docker Compose:

   `docker-compose up`

3. Abre tu navegador web y accede a `http://localhost:5050/health` para visualizar el resultado de la aplicación.
