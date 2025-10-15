# Desarrollo

Pasos para levantar la app en desarrollo

1. Levantar la base de datos:

```
docker compose up -d
```

2. Renombrar el archivo .env.template a .env.

3. Reemplazar las variables de entorno.

4. Ejecutar SEED para [crear la base de datos local](localhost:3000/api/seed).

### Prisma commands

- Iniciar configuración de prisma con nuestro proyecto.

```
npx prisma init
```

- Generar tabla en la base de datos apartir de los modelos en la configuración.

```
npx prisma migrate dev
```

- Generar cliente de prisma.

```
npx prisma generate
```

# Producción

# Stage
