# Usa una imagen base con Node.js
FROM node:19-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json /app/

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . /app/

# Construye la aplicación
RUN npm run build

# Define el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
