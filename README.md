# 🚀 Gamer To Be — Backend API

API RESTful desarrollada para gestionar el ecosistema e-commerce de **Gamer To Be**, permitiendo la administración completa del catálogo de productos, procesamiento de mensajes de contacto y gestión de usuarios con autenticación segura por roles (Admin/User) mediante JWT.

🌐 **Enlace al Backend en Producción (Render):** [https://gamer-to-be.onrender.com](https://gamer-to-be.onrender.com) *(reemplazá con tu URL exacta si difiere)*  
💻 **Frontend asociado (Vercel):** [https://gamer-to-be.vercel.app/](https://gamer-to-be.vercel.app/)

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

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular separada por responsabilidades:

```text
src/
├── config/         # Configuración de base de datos (MongoDB Atlas)
├── controllers/    # Lógica de negocio (auth, contact, products)
├── middlewares/    # Control de autenticación y seguridad (JWT)
├── models/         # Esquemas de Mongoose (User, Product, Contact)
├── routes/         # Endpoints de la API (authRouter, contactRouter, productsRouter)
└── app.js          # Configuración de Express, CORS y middlewares globales
```

---

## ⚙️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js (v18 o superior)
- Instancia local de MongoDB o clúster en MongoDB Atlas

### Pasos de Configuración

1. **Clonar el repositorio y navegar a la carpeta del servidor:**
   ```bash
   git clone <https://github.com/andreaguinder/ecommerce-gamer-to-be-backend.git>
   ```

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

4. Ejecutar la aplicación

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

*Response (201 Created): Retorna un mensaje de éxito, el token JWT y los datos del usuario.*

#### POST /auth/login
Autentica un usuario y genera el token JWT.

Acceso: Público

*Request Body*
```json
{
  "email": "admin@gamertobe.com",
  "password": "adminpassword"
}
```
*Response (200 OK): Retorna el token JWT y el rol del usuario (admin o user)*


📦 Productos (/products)
#### GET /products
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
],
...
```

#### POST /products
Crea un nuevo producto en el catálogo. (Acceso: Privado - Solo Admin)

Header: Authorization: Bearer <TOKEN_JWT>

*Request Body: Mismos campos que el esquema de producto.*

*Response (201 Created): Retorna el objeto creado con su ID de MongoDB.*


#### PUT /products/:id
Actualiza un producto existente por su ID. (Acceso: Privado - Solo Admin)

Header: Authorization: Bearer <TOKEN_JWT>

*Request Body: Campos a modificar (ej. price, stock).*

*Response (200 OK): {"message": "Producto actualizado correctamente"}*


#### DELETE /products/:id
Elimina un producto de la base de datos. (Acceso: Privado - Solo Admin)

Header: Authorization: Bearer <TOKEN_JWT>

*Response (200 OK): {"message": "Producto eliminado exitosamente"}*

---

✉️ Contacto (/contact)
#### POST /contact
Recibe y almacena un mensaje de consulta enviado desde el formulario web del frontend. (Acceso: Público)
*Request Body*
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Hola, quisiera consultar stock sobre la placa RTX 4070."
}
```
*Response (201 Created): {"message": "Mensaje enviado con éxito"}*

## 👤 Créditos y Datos de la Entrega

Estudiante: Andrea Guinder

Curso: 181805

Entrega: Tp 4 / Proyecto Final Integrador Backend

## 📚 Bibliografía y Fuentes

Documentación oficial de Node.js y Express.js.

Material de lectura teórico, prácticas y grabaciones de clases del curso de Programación Web Full Stack de la Universidad Tecnológica Nacional (UTN BA).

Documentación de Mongoose y MongoDB Atlas.