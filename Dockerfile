# Utiliza una imagen base de Node.js
FROM node:18

# Configuración de la variable de entorno GREETINGS
ENV GREETINGS "Hello Rubiko Tech!"

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

COPY . .

# Expone el puerto 5000 del contenedor
EXPOSE 5000

# Ejecuta la aplicación al iniciar el contenedor
CMD ["npm", "run", "dev"]