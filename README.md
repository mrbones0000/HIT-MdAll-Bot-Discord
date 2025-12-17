# DMALL Discord Bot

Este proyecto es un bot de Discord diseñado para enviar mensajes directos (DM) de forma masiva a los miembros de un servidor, según la configuración establecida. A continuación se explica cómo configurarlo correctamente y cómo desplegarlo en Railway.

---

## Requisitos

* Node.js 18 o superior
* Una cuenta de Discord
* Un bot de Discord creado en el Developer Portal
* Cuenta en Railway
* GitHub (recomendado)

---

## Creación del bot de Discord

1. Ve a [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Crea una nueva aplicación
3. En la sección **Bot**, crea el bot
4. Copia el **TOKEN DEL BOT** (no lo compartas con nadie)
5. Activa los siguientes **Privileged Gateway Intents**:

   * Server Members Intent
   * Message Content Intent

---

## Configuración del archivo `config.json`

Dentro del proyecto encontrarás un archivo llamado `config.json`. Debes editarlo con tus datos.

Ejemplo:

```json
{
  "token": "AQUI_VA_EL_TOKEN_DEL_BOT",
  "prefix": "!",
  "mensaje": "Este es el mensaje que se enviará por DM",
  "delay": 3000
}
```

### Explicación de los campos

* `token`: Token del bot de Discord
* `prefix`: Prefijo para los comandos
* `mensaje`: Texto que se enviará por mensaje directo
* `delay`: Tiempo en milisegundos entre cada DM (recomendado para evitar rate limits)


---

## Uso del bot

1. Invita el bot a tu servidor con permisos de:

   * Leer miembros
   * Enviar mensajes
2. Ejecuta el comando de DMALL desde el servidor:

```text
!dmall
```

El bot enviará el mensaje configurado a los miembros que tenga permiso para contactar.

---

## Despliegue en Railway

### Opción recomendada: GitHub + Railway

1. Sube el proyecto a un repositorio de GitHub
2. Ve a [https://railway.app](https://railway.app)
3. Crea un nuevo proyecto
4. Selecciona **Deploy from GitHub repo**
5. Elige tu repositorio

---

### Variables de entorno (recomendado)

En Railway, ve a **Variables** y añade:

* `TOKEN` = token del bot

Si el proyecto usa variables de entorno, reemplaza el token en el código por:

```js
process.env.TOKEN
```

Y elimina el token del `config.json` para mayor seguridad.

---

## Ejecución en Railway

Railway detectará automáticamente Node.js.
Asegúrate de que en el `package.json` exista:

```json
"scripts": {
  "start": "node index.js"
}
```

Railway ejecutará el bot automáticamente.

---

## Advertencia

El uso de bots de DMALL puede violar los Términos de Servicio de Discord si se utiliza para spam. Este proyecto es solo para fines educativos o controlados. El desarrollador no se hace responsable del uso indebido.

---

## Licencia

Uso libre bajo tu propia responsabilidad.
