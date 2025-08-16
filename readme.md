# Mia

Este repositorio está destinado únicamente para albergar las traducciones de **Mia** en diferentes idiomas.

Si quieres contribuir al proyecto ya sea añadiendo un nuevo idioma o corrigiendo errores de alguno que ya existe, simplemente lee la guía que figura a continuación.

## 🤝 Cómo contribuir

### Requisitos previos
- Dominar completamente el idioma al que vas a traducir
- Conocimientos básicos de Git y GitHub
- Entender el formato JSON

### Pasos para contribuir
1. **Elige un idioma** que domines perfectamente
2. **Haz un fork** del repositorio
3. **Clona** tu fork localmente
4. **Traduce** los archivos JSON del español al idioma deseado
5. **Conserva** la estructura y formato original
6. **Nombra** el archivo según el patrón de idiomas
7. **Realiza** una pull request con tus cambios

## 📁 Estructura del proyecto

```
idiomas/
├── fortnite/          # Traducciones específicas para Fortnite
│   ├── en_US.json
│   ├── es_ES.json
│   └── ...
└── global/            # Traducciones generales
    ├── en-US.json
    ├── es-ES.json
    └── ...
```

## 📝 Formato de archivos JSON

Los archivos JSON están estructurados de la siguiente manera:

```json
{
  "comprar": {
    "msg1": "mensaje",
    "msg2": "mensaje",
    "msg3": "mensaje"
  }
}
```

### ⚠️ Reglas importantes
- La **clave principal** (`comprar`) **NUNCA** se puede modificar
- Las **propiedades** (`msg1`, `msg2`) **NUNCA** se pueden modificar
- **Solo** traduce el **texto/valor** de cada propiedad
- Mantén el formato JSON válido
- Conserva los caracteres especiales y formato Markdown cuando corresponda

## 🏷️ Patrones de nomenclatura

Los nombres de archivos deben seguir estos patrones:

### Para carpeta `global/`
- `de-DE.json` (Alemán - Alemania)
- `en-US.json` (Inglés - Estados Unidos)
- `es-ES.json` (Español - España)
- `es-LAT.json` (Español - Latinoamérica)
- `fr-FR.json` (Francés - Francia)
- `pt-BR.json` (Portugués - Brasil)

### Para carpeta `fortnite/`
- `en_US.json` (Inglés - Estados Unidos)
- `es_ES.json` (Español - España)
- `es_MX.json` (Español - México)
- `fr_FR.json` (Francés - Francia)

## 🔍 Idiomas disponibles

### Global de el  bot
- Alemán (de-DE)
- Inglés (en-US)
- Español España (es-ES)
- Español Latinoamérica (es-LAT)
- Francés (fr-FR)
- Italiano (it-IT)
- aponés (ja-JP)
- Portugués Brasil (pt-BR)
- Portugués Portugal (pt-PT)
- Turco (tr-TR)
- Chino Simplificado (zh-CN)

### Bot de Fotnite de Mia
- Inglés (en_US)
- Español España (es_ES)
- Español México (es_MX)
- Francés (fr_FR)
- Italiano (it_IT)
- Japonés (jp_JP)
- Portugués Brasil (pl_BR)
- Polaco (pl_PL)
- Chino Simplificado (zh_CN)

## 🤔 ¿Necesitas ayuda?

Si tienes dudas sobre alguna traducción o el proceso de contribución, no dudes en:
- Unete al servidor de [Mia Lounge](https://discord.gg/miaobt) para pedir ayuda
- Contacta con algun dev de Mia dentro del servidor o abre un ticket de soporte
- Revisar las traducciones existentes como referencia

---

¡Gracias por ayudar a hacer Mia accesible para más personas alrededor del mundo! 🌟