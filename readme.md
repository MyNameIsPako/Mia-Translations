# Mia

This repository is exclusively dedicated to hosting **Mia** translations in different languages.

If you want to contribute to the project by adding a new language or fixing errors in an existing one, simply read the guide below.

## 🤝 How to contribute

### Prerequisites

- Completely master the language you are going to translate to
- Basic knowledge of Git and GitHub
- Understand JSON format

### Steps to contribute

1. **Choose a language** that you master perfectly
2. **Fork** the repository
3. **Clone** your fork locally
4. **Translate** the JSON files from Spanish to the desired language
5. **Preserve** the original structure and format
6. **Name** the file according to the language pattern
7. **Make** a pull request with your changes

## 📁 Project structure

```
idiomas/
├── fortnite/          # Fortnite-specific translations
│   ├── en_US.json
│   ├── es_ES.json
│   └── ...
└── global/            # General translations
    ├── en-US.json
    ├── es-ES.json
    └── ...
```

## 📝 JSON file format

JSON files are structured as follows:

```json
{
  "comprar": {
    "msg1": "mensaje",
    "msg2": "mensaje",
    "msg3": "mensaje"
  }
}
```

### ⚠️ Important rules

- The **main key** (`comprar`) can **NEVER** be modified
- The **properties** (`msg1`, `msg2`) can **NEVER** be modified
- **Only** translate the **text/value** of each property
- Keep the JSON format valid
- Preserve special characters and Markdown format when applicable

## 🏷️ Naming patterns

File names must follow these patterns:

### For `global/` folder

- `de-DE.json` (German - Germany)
- `en-US.json` (English - United States)
- `es-ES.json` (Spanish - Spain)
- `es-LAT.json` (Spanish - Latin America)
- `fr-FR.json` (French - France)
- `pt-BR.json` (Portuguese - Brazil)
- `tr-TR.json` (Turkish - Turkey)

### For `fortnite/` folder

- `en_US.json` (English - United States)
- `es_ES.json` (Spanish - Spain)
- `es_MX.json` (Spanish - Mexico)
- `fr_FR.json` (French - France)

## 🔍 Available languages

### Global bot

- German (de-DE)
- English (en-US)
- Spanish Spain (es-ES)
- Spanish Latin America (es-LAT)
- French (fr-FR)
- Italian (it-IT)
- Japanese (ja-JP)
- Portuguese Brazil (pt-BR)
- Portuguese Portugal (pt-PT)
- Turkish (tr-TR)
- Chinese Simplified (zh-CN)

### Mia's Fortnite Bot

- English (en_US)
- Spanish Spain (es_ES)
- Spanish Mexico (es_MX)
- French (fr_FR)
- Italian (it_IT)
- Japanese (jp_JP)
- Portuguese Brazil (pl_BR)
- Polish (pl_PL)
- Chinese Simplified (zh_CN)

## 🤔 Need help?

If you have doubts about any translation or the contribution process, don't hesitate to:

- Join the [Mia Lounge](https://discord.gg/miaobt) server to ask for help
- Contact any Mia dev within the server or open a support ticket
- Review existing translations as reference

---

Thank you for helping make Mia accessible to more people around the world! 🌟
