---
title: Protege tu Dominio con SPF, DKIM y DMARC
description: Asegura tu dominio y mejora la entregabilidad del correo con estos registros DNS
heroImage: https://res.cloudinary.com/wwws/image/upload/v1749846169/astro-multisite/larico.dev/zsdtomnw2mfoil7c90eu.jpg
category: Email Security
tags:
  - SPF
  - DKIM
  - DMARC
  - CNAME
  - TXT
  - Email
pubDate: 2025-06-08T12:00:00.000Z
---

## Configuración básica para Outlook y Gmail

Asegura tu dominio y mejora la entregabilidad del correo con estos registros DNS:

### ✅ SPF

```txt
v=spf1 include:spf.protection.outlook.com include:_spf.google.com -all
```

Agrega como registro TXT con nombre `@`.

### ✅ DKIM

Actívalo desde:

- Microsoft 365 Admin Center
- Google Workspace Admin Console

Luego agrega los registros CNAME/TXT que te dan, como:

```txt
selector1._domainkey.tudominio.com
```

### ✅ DMARC

```txt
v=DMARC1; p=quarantine; rua=mailto:tuemail@tudominio.com
```

Para protección estricta:
agrega TXT `_dmarc` como nombre y el siguiente valor:

```txt
v=DMARC1; p=reject; rua=mailto:tuemail@tudominio.com
```

Verifica <a href="https://mxtoolbox.com/SuperTool.aspx?action=spf%3alarico.dev&run=toolpage" target="_blank" rel="nofollow noreferrer">SPF</a> y
<a href="https://mxtoolbox.com/SuperTool.aspx?action=dmarc%3alarico.dev&run=toolpage" target="_blank" rel="nofollow noreferrer">DMARC</a> en mxtoolbox.com

También puede verificar los datos en
<a href="https://toolbox.googleapps.com/apps/dig/" target="_blank" rel="nofollow noreferrer">Google Admin Toolbox</a>

**Pro tip:** Solo un registro SPF por dominio. Revisa tus registros antes de guardar.
