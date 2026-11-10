# 🚀 Gamer To Be — Backend API

API RESTful desarrollada para gestionar el ecosistema e-commerce de **Gamer To Be**, permitiendo la administración de catálogo de productos, procesamiento de mensajes de contacto y gestión de usuarios con autenticación segura por roles (Admin/User).

Desplegado y disponible públicamente en Render.

---

## 🛠️ Tech Stack & Herramientas

- **Entorno de Ejecución:** Node.js
- **Framework Web:** Express.js
- **Base de Datos:** MongoDB (Mongoose ORM)
- **Autenticación y Seguridad:** JSON Web Token (JWT) & bcryptjs
- **Validación de Datos:** Zod
- **Variables de Entorno:** dotenv
- **Despliegue:** Render

---

## ⚙️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js (v18 o superior)
- Instancia local de MongoDB o clúster en MongoDB Atlas

### Pasos de Configuración

1. **Clonar el repositorio y navegar a la carpeta del servidor:**
   ```bash
   git clone <URL_DE_TU_REPOSITO>
   cd gamer-to-be/backend


2. **Instalar las dependencias**

```bash
    npm install
```
3. **Configurar las variables de entorno**

Creá un archivo llamado **`.env`** en la raíz del proyecto (al mismo nivel que el `package.json`) y agregá las siguientes variables con tus datos de conexión:

```bash
PORT=3000
MONGODB_URL=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/gamer_to_be
JWT_SECRET=tu_clave_secreta_super_segura
```

> *Nota: Si usás MongoDB local, podés usar `mongodb://localhost:27017/nombre_de_tu_base`. Si usás MongoDB Atlas, pegá tu URI completa de la nube.*

### 4. Ejecutar la aplicación

```bash
    npm run dev
```

## 📡 Descripción de Endpoints

### 🔑 Autenticación (`/auth`)

#### `POST /auth/register`
Registra un nuevo usuario en la plataforma.
- **Acceso:** Público

*Request Body:*
```json
{
  "name": "Usuario Gamer",
  "email": "usuario@example.com",
  "password": "password123"
}
```

*Response (201 Created)*
```json
{
  "message": "Usuario registrado exitosamente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVC...",
  "user": {
    "id": "6732a1b9e...",
    "name": "Usuario Gamer",
    "email": "usuario@example.com",
    "role": "user"
  }
}
```
POST /auth/login
Autentica un usuario y genera el token JWT.

Acceso: Público

*Request Body*
```json
{
  "email": "admin@gamertobe.com",
  "password": "adminpassword"
}
```
*Response (200 OK)*
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkXVC...",
  "user": {
    "id": "6732a1b9e...",
    "name": "Admin Gamer",
    "email": "admin@gamertobe.com",
    "role": "admin"
  }
}
```

📦 Productos (/products)
GET /products
Obtiene la lista completa de productos.

Acceso: Público

*Response (200 OK)*
```json
[
  {
    "_id": "651f8a...",
    "name": "Placa de Video RTX 4070",
    "price": 850000,
    "description": "12GB GDDR6X High Performance",
    "category": "Componentes",
    "stock": 10,
    "image": "[https://url-imagen.com/rtx4070.jpg](https://url-imagen.com/rtx4070.jpg)"
  }
]
```

PUT /products/:id
Actualiza un producto existente por su ID.

Acceso: Privado (Solo Admin)

Header: Authorization: Bearer <TOKEN_JWT>
*Request Body*
```json
{
  "price": 48000,
  "stock": 12
}
```
*Response (200 OK)*
```json
{
"message": "Producto actualizado correctamente"
}
```
DELETE /products/:id
Elimina un producto de la base de datos.

Acceso: Privado (Solo Admin)

Header: Authorization: Bearer <TOKEN_JWT>
*Response (200 OK)*
```json
{
"message": "Producto eliminado exitosamente"
}
```

POST /contact
Recibe y almacena un mensaje de contacto enviado desde el frontend.

Acceso: Público
*Request Body*
```json
{
"name": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Hola, quisiera consultar stock sobre la placa RTX 4070."
}
```
*Response (201 Created)*
```json
{
  "message": "Mensaje enviado con éxito"
}
```

## 👤 Créditos y Datos de la Entrega

Estudiante: Andrea Guinder

Curso: 181805

Unidad 3 - Express, Mongo DB

Entrega: Tarea N° 3

## 📚 Bibliografía y Fuentes

Material de lectura, documentación oficial del Curso de Node.js y revisión de grabación de clase, de la Universidad Tecnológica Nacional (UTN).