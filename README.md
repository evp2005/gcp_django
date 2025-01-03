# Pasos para usar Django con SQL Instance en GCP

## 1. Crear repositorio en Github

## 2. Subir el código con el comando mostrado por Github

## 3. Crear Artifact Registry

## 4. Crear cuenta de servicio

### Crea una cuenta de servicio con los siguientes permisos

- Artifact Registry Administrator
- Cloud Run Admin
- Editor
- Service Account User
- Storage Admin

## 4. Crear variables de entorno en Github

### Esto lo hacemos a través de la configuración del repositorio, sección "Secrets and variables" y la opción "Actions". Necesitamos crear las siguientes

- ARTIFACT_REGISTRY_NAME

  > Nombre del registro del artifact donde se almacenara la imagen de docker

- DEV_APP_NAME

  > Nombre del cloud run

- GCP_SA_KEY

  > Llave en formato JSON de la cuenta de servicio

- PROJECT_ID

  > ID del proyecto

- REGION

  > Region, preferible us-central1 (Iowa)

- SERVICE_ACCOUNT_EMAIL

  > Correo de la cuenta de servicio que hará el despliegue

- SQL_INSTANCE_NAME

  > Nombre de la instancia SQL

- CLOUDRUN_SERVICE_URL

  > URL del servicio de Cloud Run

- SQL_HOST

  > Host de conexión del SQL, example /cloudsql/modified-hearth-442900-k9:us-central1:django-tutorial-db

- SQL_TABLE

  > Nombre de la tabla

- SQL_USER

  > Nombre de usuario

- SQL_PASSWORD
  > Contraseña del usuario

## Comando para empaquetar recursos estaticos

> python3 manage.py collectstatic
