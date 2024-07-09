# Palomo Editor

¡Bienvenido al repositorio de Palomo Editor! Esta aplicación está diseñada para gestionar palomos, permitiendo a los usuarios crear un árbol genealógico de sus palomos, y registrar capturas filtradas por año. A continuación, se detallan las tecnologías utilizadas y las funcionalidades de la aplicación.

## Tecnologías Utilizadas

### Backend
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

### Frontend
- **Next.js 14**

## Funcionalidades

### Autenticación
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión en la aplicación.
- **Manejo de Sesiones**: Las sesiones de los usuarios se guardan en cookies para facilitar la autenticación en futuras visitas.

### Perfil de Usuario
- **Gestión de Palomos**: Una vez autenticado, el usuario tiene acceso a su perfil, donde puede añadir nuevos palomos con sus respectivos datos.
- **Árbol Genealógico**: La aplicación permite crear y visualizar un árbol genealógico de los palomos.

### Registro de Capturas
- **Anotaciones de Capturas**: Los usuarios pueden registrar las capturas de sus palomos.
- **Filtrado por Año**: Las capturas pueden ser filtradas por año para una mejor organización y visualización.

## Instalación

### Prerequisitos
- Node.js v14 o superior
- MongoDB

### Pasos para la Instalación
1. Clona este repositorio:
    ```bash
    git clone https://github.com/ItzRoBeerT/editor-de-palomos.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd editor-de-palomos
    ```

3. Instala las dependencias del backend:
    ```bash
    cd backend
    npm install
    ```

4. Configura las variables de entorno en el archivo `.env.local` en el directorio `editor-de-palomos`:
    ```env
    PORT=3000
    MONGODB_URL=tu-mongodb-uri
    ```

5. Inicia el servidor backend:
    ```bash
    npm start
    ```

6. Instala las dependencias del frontend:
    ```bash
    cd ../frontend
    npm install
    ```

7. Inicia el servidor frontend:
    ```bash
    npm run dev
    ```

8. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue los siguientes pasos:
1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Envía tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactar a [ItzRobeerT](mailto:robertocaravaca436@gmail.com).

¡Gracias por usar Palomo Editor!
