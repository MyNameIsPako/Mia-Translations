import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Discord muestra `Paso N` cuando en JSON está \\`Paso N\\` */
function step(n, text, lang = 'es') {
  const labels = {
    es: 'Paso',
    en: 'Step',
    fr: 'Étape',
    de: 'Schritt',
    it: 'Passo',
    pt: 'Passo',
    tr: 'Adım',
    zh: '步骤',
    ja: 'ステップ'
  };
  const label = labels[lang] || labels.es;
  return '\\`' + label + ' ' + n + '\\` ' + text;
}

const registrar = {
  'es-ES': {
    lang: 'es',
    msg49: 'Importar cuentas desde Glow Launcher',
    msg50: 'Archivo glowlauncher.json',
    msg51: 'Selecciona tu **glowlauncher.json** exportado desde Glow Launcher.',
    msg52: 'No se pudo leer el archivo JSON. Inténtalo de nuevo.',
    msg53: 'El JSON no es válido. Exporta el archivo desde Glow Launcher.',
    msg54: 'Importando',
    msg55: 'cuenta(s)...',
    msg56: 'Datos incompletos en la cuenta',
    msg57: 'Ya registrada o pertenece a otro usuario',
    msg58: 'Cuenta en la blacklist de Mia',
    msg59: 'Cuenta importada correctamente',
    msg60: 'Se importaron',
    msg61: 'cuenta(s) correctamente',
    msg62: 'con',
    msg63: 'error(es)',
    msg64: 'Errores:',
    msg65: 'y',
    msg66: 'más',
    msg67: () => step(1, 'Pulsa **Adjuntar archivo**', 'es'),
    msg68: () => step(2, 'Adjunta tu archivo **glowlauncher.json**', 'es'),
    msg69: () => step(3, 'Mia registrará las cuentas de tu export de Glow Launcher', 'es'),
    msg70: 'Exporta el JSON desde Glow Launcher y súbelo aquí',
    msg71: 'Adjuntar archivo',
    msg72: 'Importar cuentas desde Mia Launcher',
    msg75: 'Archivo mialauncher.json',
    msg76: 'Selecciona tu **mialauncher.json** (launcher o /mia-export en MD).',
    msg77: () => step(2, 'Adjunta tu archivo **mialauncher.json**', 'es'),
    msg78: 'Exporta con /mia-export en MD o desde Mia Launcher → Cuentas → Exportar JSON',
    msg86: 'El JSON no es válido. Usa un export de Mia Launcher o /mia-export.',
    msg87: () => step(3, 'Mia registrará las cuentas de tu export de Mia Launcher', 'es')
  },
  'en-US': {
    lang: 'en',
    msg49: 'Import accounts from Glow Launcher',
    msg50: 'glowlauncher.json file',
    msg51: 'Select your **glowlauncher.json** exported from Glow Launcher.',
    msg52: 'Could not read the JSON file. Please try again.',
    msg53: 'Invalid JSON. Export the file from Glow Launcher.',
    msg54: 'Importing',
    msg55: 'account(s)...',
    msg56: 'Account has incomplete data',
    msg57: 'Already registered or owned by another user',
    msg58: 'Account is on Mia\'s blacklist',
    msg59: 'Account imported successfully',
    msg60: 'Imported',
    msg61: 'account(s) successfully',
    msg62: 'with',
    msg63: 'error(s)',
    msg64: 'Errors:',
    msg65: 'and',
    msg66: 'more',
    msg67: () => step(1, 'Click **Attach file**', 'en'),
    msg68: () => step(2, 'Upload your **glowlauncher.json** file', 'en'),
    msg69: () => step(3, 'Mia will register every account from your Glow Launcher export', 'en'),
    msg70: 'Export JSON from Glow Launcher and upload it here',
    msg71: 'Attach file',
    msg72: 'Import accounts from Mia Launcher',
    msg75: 'mialauncher.json file',
    msg76: 'Select your **mialauncher.json** (launcher or /mia-export in DMs).',
    msg77: () => step(2, 'Upload your **mialauncher.json** file', 'en'),
    msg78: 'Export with /mia-export in DMs or Mia Launcher → Accounts → Export JSON',
    msg86: 'Invalid JSON. Use an export from Mia Launcher or /mia-export.',
    msg87: () => step(3, 'Mia will register every account from your Mia Launcher export', 'en')
  },
  'fr-FR': {
    lang: 'fr',
    msg49: 'Importer des comptes depuis Glow Launcher',
    msg50: 'Fichier glowlauncher.json',
    msg51: 'Sélectionne ton **glowlauncher.json** exporté depuis Glow Launcher.',
    msg52: 'Impossible de lire le fichier JSON. Réessaie.',
    msg53: 'JSON invalide. Exporte le fichier depuis Glow Launcher.',
    msg54: 'Importation',
    msg55: 'compte(s)...',
    msg56: 'Données de compte incomplètes',
    msg57: 'Déjà enregistré ou appartient à un autre utilisateur',
    msg58: 'Compte sur la blacklist de Mia',
    msg59: 'Compte importé avec succès',
    msg60: 'Importé',
    msg61: 'compte(s) avec succès',
    msg62: 'avec',
    msg63: 'erreur(s)',
    msg64: 'Erreurs :',
    msg65: 'et',
    msg66: 'de plus',
    msg67: () => step(1, 'Clique sur **Joindre un fichier**', 'fr'),
    msg68: () => step(2, 'Envoie ton fichier **glowlauncher.json**', 'fr'),
    msg69: () => step(3, 'Mia enregistrera tous les comptes de ton export Glow Launcher', 'fr'),
    msg70: 'Exporte le JSON depuis Glow Launcher et envoie-le ici',
    msg71: 'Joindre un fichier',
    msg72: 'Importer des comptes depuis Mia Launcher',
    msg75: 'Fichier mialauncher.json',
    msg76: 'Sélectionne ton **mialauncher.json** (launcher ou /mia-export en MP).',
    msg77: () => step(2, 'Envoie ton fichier **mialauncher.json**', 'fr'),
    msg78: 'Exporte avec /mia-export en MP ou Mia Launcher → Comptes → Exporter JSON',
    msg86: 'JSON invalide. Utilise un export Mia Launcher ou /mia-export.',
    msg87: () => step(3, 'Mia enregistrera tous les comptes de ton export Mia Launcher', 'fr')
  },
  'de-DE': {
    lang: 'de',
    msg49: 'Konten aus Glow Launcher importieren',
    msg50: 'glowlauncher.json-Datei',
    msg51: 'Wähle deine **glowlauncher.json** aus Glow Launcher.',
    msg52: 'JSON-Datei konnte nicht gelesen werden. Bitte erneut versuchen.',
    msg53: 'Ungültiges JSON. Exportiere die Datei aus Glow Launcher.',
    msg54: 'Importiere',
    msg55: 'Konto/Konten...',
    msg56: 'Unvollständige Kontodaten',
    msg57: 'Bereits registriert oder gehört einem anderen Nutzer',
    msg58: 'Konto steht auf Mias Blacklist',
    msg59: 'Konto erfolgreich importiert',
    msg60: 'Importiert',
    msg61: 'Konto/Konten erfolgreich',
    msg62: 'mit',
    msg63: 'Fehler(n)',
    msg64: 'Fehler:',
    msg65: 'und',
    msg66: 'weitere',
    msg67: () => step(1, 'Klicke auf **Datei anhängen**', 'de'),
    msg68: () => step(2, 'Lade deine **glowlauncher.json** hoch', 'de'),
    msg69: () => step(3, 'Mia registriert alle Konten aus deinem Glow Launcher-Export', 'de'),
    msg70: 'Exportiere JSON aus Glow Launcher und lade es hier hoch',
    msg71: 'Datei anhängen',
    msg72: 'Konten aus Mia Launcher importieren',
    msg75: 'mialauncher.json-Datei',
    msg76: 'Wähle deine **mialauncher.json** (Launcher oder /mia-export per DM).',
    msg77: () => step(2, 'Lade deine **mialauncher.json** hoch', 'de'),
    msg78: 'Export mit /mia-export per DM oder Mia Launcher → Konten → JSON exportieren',
    msg86: 'Ungültiges JSON. Nutze einen Export von Mia Launcher oder /mia-export.',
    msg87: () => step(3, 'Mia registriert alle Konten aus deinem Mia Launcher-Export', 'de')
  },
  'it-IT': {
    lang: 'it',
    msg49: 'Importa account da Glow Launcher',
    msg50: 'File glowlauncher.json',
    msg51: 'Seleziona il tuo **glowlauncher.json** esportato da Glow Launcher.',
    msg52: 'Impossibile leggere il file JSON. Riprova.',
    msg53: 'JSON non valido. Esporta il file da Glow Launcher.',
    msg54: 'Importazione',
    msg55: 'account...',
    msg56: 'Dati account incompleti',
    msg57: 'Già registrato o di un altro utente',
    msg58: 'Account nella blacklist di Mia',
    msg59: 'Account importato correttamente',
    msg60: 'Importati',
    msg61: 'account correttamente',
    msg62: 'con',
    msg63: 'errore/i',
    msg64: 'Errori:',
    msg65: 'e',
    msg66: 'altri',
    msg67: () => step(1, 'Clicca **Allega file**', 'it'),
    msg68: () => step(2, 'Carica il file **glowlauncher.json**', 'it'),
    msg69: () => step(3, 'Mia registrerà tutti gli account dal tuo export Glow Launcher', 'it'),
    msg70: 'Esporta JSON da Glow Launcher e caricalo qui',
    msg71: 'Allega file',
    msg72: 'Importa account da Mia Launcher',
    msg75: 'File mialauncher.json',
    msg76: 'Seleziona il tuo **mialauncher.json** (launcher o /mia-export in DM).',
    msg77: () => step(2, 'Carica il file **mialauncher.json**', 'it'),
    msg78: 'Esporta con /mia-export in DM o Mia Launcher → Account → Esporta JSON',
    msg86: 'JSON non valido. Usa un export da Mia Launcher o /mia-export.',
    msg87: () => step(3, 'Mia registrerà tutti gli account dal tuo export Mia Launcher', 'it')
  },
  'pt-BR': {
    lang: 'pt',
    msg49: 'Importar contas do Glow Launcher',
    msg50: 'Arquivo glowlauncher.json',
    msg51: 'Selecione seu **glowlauncher.json** exportado do Glow Launcher.',
    msg52: 'Não foi possível ler o JSON. Tente novamente.',
    msg53: 'JSON inválido. Exporte o arquivo pelo Glow Launcher.',
    msg54: 'Importando',
    msg55: 'conta(s)...',
    msg56: 'Dados da conta incompletos',
    msg57: 'Já registrada ou pertence a outro usuário',
    msg58: 'Conta na blacklist da Mia',
    msg59: 'Conta importada com sucesso',
    msg60: 'Importadas',
    msg61: 'conta(s) com sucesso',
    msg62: 'com',
    msg63: 'erro(s)',
    msg64: 'Erros:',
    msg65: 'e',
    msg66: 'mais',
    msg67: () => step(1, 'Clique em **Anexar arquivo**', 'pt'),
    msg68: () => step(2, 'Envie seu arquivo **glowlauncher.json**', 'pt'),
    msg69: () => step(3, 'A Mia registrará todas as contas do seu export do Glow Launcher', 'pt'),
    msg70: 'Exporte JSON no Glow Launcher e envie aqui',
    msg71: 'Anexar arquivo',
    msg72: 'Importar contas do Mia Launcher',
    msg75: 'Arquivo mialauncher.json',
    msg76: 'Selecione seu **mialauncher.json** (launcher ou /mia-export no MD).',
    msg77: () => step(2, 'Envie seu arquivo **mialauncher.json**', 'pt'),
    msg78: 'Exporte com /mia-export no MD ou Mia Launcher → Contas → Exportar JSON',
    msg86: 'JSON inválido. Use export do Mia Launcher ou /mia-export.',
    msg87: () => step(3, 'A Mia registrará todas as contas do seu export do Mia Launcher', 'pt')
  },
  'pt-PT': {
    lang: 'pt',
    msg49: 'Importar contas do Glow Launcher',
    msg50: 'Ficheiro glowlauncher.json',
    msg51: 'Seleciona o teu **glowlauncher.json** exportado do Glow Launcher.',
    msg52: 'Não foi possível ler o JSON. Tenta novamente.',
    msg53: 'JSON inválido. Exporta o ficheiro a partir do Glow Launcher.',
    msg54: 'A importar',
    msg55: 'conta(s)...',
    msg56: 'Dados da conta incompletos',
    msg57: 'Já registada ou pertence a outro utilizador',
    msg58: 'Conta na blacklist da Mia',
    msg59: 'Conta importada com sucesso',
    msg60: 'Importadas',
    msg61: 'conta(s) com sucesso',
    msg62: 'com',
    msg63: 'erro(s)',
    msg64: 'Erros:',
    msg65: 'e',
    msg66: 'mais',
    msg67: () => step(1, 'Clica em **Anexar ficheiro**', 'pt'),
    msg68: () => step(2, 'Envia o ficheiro **glowlauncher.json**', 'pt'),
    msg69: () => step(3, 'A Mia regista todas as contas do teu export do Glow Launcher', 'pt'),
    msg70: 'Exporta JSON no Glow Launcher e envia aqui',
    msg71: 'Anexar ficheiro',
    msg72: 'Importar contas do Mia Launcher',
    msg75: 'Ficheiro mialauncher.json',
    msg76: 'Seleciona o teu **mialauncher.json** (launcher ou /mia-export por MD).',
    msg77: () => step(2, 'Envia o ficheiro **mialauncher.json**', 'pt'),
    msg78: 'Exporta com /mia-export por MD ou Mia Launcher → Contas → Exportar JSON',
    msg86: 'JSON inválido. Usa export do Mia Launcher ou /mia-export.',
    msg87: () => step(3, 'A Mia regista todas as contas do teu export do Mia Launcher', 'pt')
  },
  'tr-TR': {
    lang: 'tr',
    msg49: 'Glow Launcher\'dan hesap içe aktar',
    msg50: 'glowlauncher.json dosyası',
    msg51: 'Glow Launcher\'dan dışa aktardığın **glowlauncher.json** dosyasını seç.',
    msg52: 'JSON dosyası okunamadı. Tekrar dene.',
    msg53: 'Geçersiz JSON. Dosyayı Glow Launcher\'dan dışa aktar.',
    msg54: 'İçe aktarılıyor',
    msg55: 'hesap...',
    msg56: 'Eksik hesap verisi',
    msg57: 'Zaten kayıtlı veya başka bir kullanıcıya ait',
    msg58: 'Hesap Mia kara listesinde',
    msg59: 'Hesap başarıyla içe aktarıldı',
    msg60: 'İçe aktarıldı',
    msg61: 'hesap başarıyla',
    msg62: 'ile',
    msg63: 'hata',
    msg64: 'Hatalar:',
    msg65: 've',
    msg66: 'daha fazla',
    msg67: () => step(1, '**Dosya ekle** düğmesine tıkla', 'tr'),
    msg68: () => step(2, '**glowlauncher.json** dosyanı yükle', 'tr'),
    msg69: () => step(3, 'Mia, Glow Launcher dışa aktarımındaki tüm hesapları kaydeder', 'tr'),
    msg70: 'Glow Launcher\'dan JSON dışa aktar ve buraya yükle',
    msg71: 'Dosya ekle',
    msg72: 'Mia Launcher\'dan hesap içe aktar',
    msg75: 'mialauncher.json dosyası',
    msg76: '**mialauncher.json** dosyanı seç (launcher veya MD\'de /mia-export).',
    msg77: () => step(2, '**mialauncher.json** dosyanı yükle', 'tr'),
    msg78: 'MD\'de /mia-export veya Mia Launcher → Hesaplar → JSON dışa aktar',
    msg86: 'Geçersiz JSON. Mia Launcher veya /mia-export dışa aktarımı kullan.',
    msg87: () => step(3, 'Mia, Mia Launcher dışa aktarımındaki tüm hesapları kaydeder', 'tr')
  },
  'zh-CN': {
    lang: 'zh',
    msg49: '从 Glow Launcher 导入账户',
    msg50: 'glowlauncher.json 文件',
    msg51: '选择从 Glow Launcher 导出的 **glowlauncher.json**。',
    msg52: '无法读取 JSON 文件，请重试。',
    msg53: 'JSON 无效。请从 Glow Launcher 导出文件。',
    msg54: '正在导入',
    msg55: '个账户...',
    msg56: '账户数据不完整',
    msg57: '已注册或属于其他用户',
    msg58: '账户在 Mia 黑名单中',
    msg59: '账户导入成功',
    msg60: '已导入',
    msg61: '个账户',
    msg62: '，',
    msg63: '个错误',
    msg64: '错误：',
    msg65: '以及',
    msg66: '更多',
    msg67: () => step(1, '点击 **附加文件**', 'zh'),
    msg68: () => step(2, '上传 **glowlauncher.json** 文件', 'zh'),
    msg69: () => step(3, 'Mia 将注册 Glow Launcher 导出文件中的所有账户', 'zh'),
    msg70: '从 Glow Launcher 导出 JSON 并在此上传',
    msg71: '附加文件',
    msg72: '从 Mia Launcher 导入账户',
    msg75: 'mialauncher.json 文件',
    msg76: '选择 **mialauncher.json**（启动器或私信 /mia-export）。',
    msg77: () => step(2, '上传 **mialauncher.json** 文件', 'zh'),
    msg78: '通过私信 /mia-export 或 Mia Launcher → 账户 → 导出 JSON',
    msg86: 'JSON 无效。请使用 Mia Launcher 或 /mia-export 的导出文件。',
    msg87: () => step(3, 'Mia 将注册 Mia Launcher 导出文件中的所有账户', 'zh')
  },
  'ja-JP': {
    lang: 'ja',
    msg49: 'Glow Launcher からアカウントをインポート',
    msg50: 'glowlauncher.json ファイル',
    msg51: 'Glow Launcher からエクスポートした **glowlauncher.json** を選択。',
    msg52: 'JSON ファイルを読み取れませんでした。もう一度お試しください。',
    msg53: 'JSON が無効です。Glow Launcher からエクスポートしてください。',
    msg54: 'インポート中',
    msg55: 'アカウント...',
    msg56: 'アカウントデータが不完全です',
    msg57: '既に登録済み、または他のユーザーが所有',
    msg58: 'アカウントは Mia のブラックリストにあります',
    msg59: 'アカウントを正常にインポートしました',
    msg60: 'インポート完了',
    msg61: 'アカウント',
    msg62: '、エラー',
    msg63: '件',
    msg64: 'エラー:',
    msg65: '他',
    msg66: '件',
    msg67: () => step(1, '**ファイルを添付** をクリック', 'ja'),
    msg68: () => step(2, '**glowlauncher.json** をアップロード', 'ja'),
    msg69: () => step(3, 'Mia が Glow Launcher のエクスポートからすべてのアカウントを登録します', 'ja'),
    msg70: 'Glow Launcher から JSON をエクスポートしてここにアップロード',
    msg71: 'ファイルを添付',
    msg72: 'Mia Launcher からアカウントをインポート',
    msg75: 'mialauncher.json ファイル',
    msg76: '**mialauncher.json** を選択（ランチャーまたは DM の /mia-export）。',
    msg77: () => step(2, '**mialauncher.json** をアップロード', 'ja'),
    msg78: 'DM で /mia-export、または Mia Launcher → アカウント → JSON エクスポート',
    msg86: 'JSON が無効です。Mia Launcher または /mia-export のエクスポートを使用してください。',
    msg87: () => step(3, 'Mia が Mia Launcher のエクスポートからすべてのアカウントを登録します', 'ja')
  }
};

registrar['es-LAT'] = { ...registrar['es-ES'] };

function resolvePatch(raw) {
  const out = {};
  for (const [key, value] of Object.entries(raw)) {
    if (key === 'lang') continue;
    out[key] = typeof value === 'function' ? value() : value;
  }
  return out;
}

const targetDirs = [
  path.resolve(__dirname, '../idiomas/global'),
  path.resolve(__dirname, '../../Mia/resources/idiomas/global')
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    console.log('skip missing dir', dir);
    continue;
  }

  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
    const locale = file.replace('.json', '');
    const raw = registrar[locale];
    if (!raw) {
      console.log('skip locale', file, 'in', dir);
      continue;
    }

    const fp = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const reg = data.comandos?.cuenta?.registrar;
    if (!reg) {
      console.log('no registrar in', fp);
      continue;
    }

    Object.assign(reg, resolvePatch(raw));

    // glow + mia export sections
    if (locale === 'es-ES' || locale === 'es-LAT') {
      data.glow = {
        msg1: 'Se exportaron',
        msg2: 'cuentas para **Glow Launcher**',
        msg3:
          'Este archivo contiene toda la información de tus cuentas. No lo compartas y elimínalo después de usarlo.'
      };
      data.mia = {
        msg1: 'Se exportaron',
        msg2: 'cuentas para **Mia Launcher**',
        msg3:
          'Este archivo contiene toda la información de tus cuentas. No lo compartas y elimínalo después de usarlo.'
      };
    }

    fs.writeFileSync(fp, `${JSON.stringify(data, null, 2)}\n`);
    console.log('updated', fp);
  }
}
