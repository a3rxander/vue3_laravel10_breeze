# Establecer la imagen base
FROM node:latest

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json
COPY package.json .

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "dev"]