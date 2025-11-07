# Docker con Apache + MySQL (Linux)

Esta carpeta contiene un ejemplo básico para ejecutar la web con un servidor Apache y una base de datos MySQL usando Docker Compose.

Archivos relevantes:
- `Dockerfile.apache` — Dockerfile que usa `httpd:2.4-alpine` para servir la web estática.
- `docker-compose.yml` — Orquesta dos servicios: `web` (construido desde `Dockerfile.apache`) y `db` (MySQL 8.0).
- `.env.example` — Variables de entorno sugeridas para MySQL.

Construir y arrancar (PowerShell):

```powershell
# (Opcional) copiar .env.example a .env y editar contraseñas antes de levantar
copy .env.example .env

docker compose up -d --build
```

Abrir en el navegador:

http://localhost:8080

Detener y quitar contenedores:

```powershell
docker compose down
```

Notas:
- El servicio `db` expone el puerto 3306 localmente para facilitar conexiones desde herramientas externas; si prefieres no exponerlo, borra la línea `ports: - "3306:3306"` en `docker-compose.yml`.
- El proyecto monta la carpeta actual en `/usr/local/apache2/htdocs/` en modo de solo lectura (`ro`) para que puedas editar archivos localmente y verlos servidos por Apache.
- Si necesitas PHP, podemos cambiar `Dockerfile.apache` para usar `php:<version>-apache` y así ejecutar scripts PHP.
