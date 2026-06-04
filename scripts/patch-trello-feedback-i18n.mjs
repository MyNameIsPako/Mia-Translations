import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const globalDir = path.join(__dirname, "../idiomas/global");

const blocks = {
	"es-ES": {
		reporte: {
			msgEnviado:
				"${emojis.check} Tu **reporte** (*${titulo}*) del producto **${producto}** se envió correctamente al equipo, te avisaremos por privado cuando sea revisado.",
			footer: "Gracias por reportarnos este error",
			btnTrello: "Ver reporte en Trello",
			btnCanalDiscord: "Canal de Trello en Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} Tu **sugerencia** (*${titulo}*) del producto **${producto}** se envió correctamente al equipo. Te avisaremos por privado cuando sea revisada.",
			footer: "Gracias por tu aporte, esto nos ayuda a mejorar Mia",
			btnTrello: "Ver sugerencia en Trello",
			btnCanalDiscord: "Canal de Trello en Discord"
		},
		dm: {
			tipoReporte: "reporte",
			tipoSugerencia: "sugerencia",
			revisadoM: "revisado",
			revisadoF: "revisada",
			marcadoM: "marcado",
			marcadoF: "marcada",
			footerReporte: "Gracias por ayudarnos a mejorar Mia",
			footerSugerencia: "Gracias por tu aporte a Mia",
			msgGestion:
				"${emojis.check} Tu **${tipo}** (*${titulo}*) del producto **${producto}** ha sido ${revisado} por el equipo y ha sido ${marcado} como **${resultado}**",
			sinTitulo: "sin título",
			sinProducto: "sin producto",
			btnTrello: "Ver en Trello",
			btnCanalDiscord: "Canal de Trello en Discord",
			resultadoAceptada: "aceptada",
			resultadoRechazada: "rechazada",
			resultadoArchivada: "archivada",
			resultadoArreglado: "arreglado",
			resultadoArchivado: "archivado",
			resultadoActualizada: "actualizada"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"es-LAT": null,
	"en-US": {
		reporte: {
			msgEnviado:
				"${emojis.check} Your **report** (*${titulo}*) for **${producto}** was sent to the team successfully. We will notify you privately when it has been reviewed.",
			footer: "Thanks for reporting this issue",
			btnTrello: "View report on Trello",
			btnCanalDiscord: "Trello channel on Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} Your **suggestion** (*${titulo}*) for **${producto}** was sent to the team successfully. We will notify you privately when it has been reviewed.",
			footer: "Thanks for your contribution — it helps us improve Mia",
			btnTrello: "View suggestion on Trello",
			btnCanalDiscord: "Trello channel on Discord"
		},
		dm: {
			tipoReporte: "report",
			tipoSugerencia: "suggestion",
			revisadoM: "reviewed",
			revisadoF: "reviewed",
			marcadoM: "marked",
			marcadoF: "marked",
			footerReporte: "Thanks for helping us improve Mia",
			footerSugerencia: "Thanks for your contribution to Mia",
			msgGestion:
				"${emojis.check} Your **${tipo}** (*${titulo}*) for **${producto}** has been ${revisado} by the team and was ${marcado} as **${resultado}**",
			sinTitulo: "no title",
			sinProducto: "no product",
			btnTrello: "View on Trello",
			btnCanalDiscord: "Trello channel on Discord",
			resultadoAceptada: "accepted",
			resultadoRechazada: "rejected",
			resultadoArchivada: "archived",
			resultadoArreglado: "fixed",
			resultadoArchivado: "archived",
			resultadoActualizada: "updated"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"fr-FR": {
		reporte: {
			msgEnviado:
				"${emojis.check} Votre **rapport** (*${titulo}*) pour **${producto}** a bien été envoyé à l'équipe. Nous vous préviendrons en privé lorsqu'il aura été examiné.",
			footer: "Merci de nous avoir signalé ce problème",
			btnTrello: "Voir le rapport sur Trello",
			btnCanalDiscord: "Canal Trello sur Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} Votre **suggestion** (*${titulo}*) pour **${producto}** a bien été envoyée à l'équipe. Nous vous préviendrons en privé lorsqu'elle aura été examinée.",
			footer: "Merci pour votre contribution, cela nous aide à améliorer Mia",
			btnTrello: "Voir la suggestion sur Trello",
			btnCanalDiscord: "Canal Trello sur Discord"
		},
		dm: {
			tipoReporte: "rapport",
			tipoSugerencia: "suggestion",
			revisadoM: "examiné",
			revisadoF: "examinée",
			marcadoM: "marqué",
			marcadoF: "marquée",
			footerReporte: "Merci de nous aider à améliorer Mia",
			footerSugerencia: "Merci pour votre contribution à Mia",
			msgGestion:
				"${emojis.check} Votre **${tipo}** (*${titulo}*) pour **${producto}** a été ${revisado} par l'équipe et a été ${marcado} comme **${resultado}**",
			sinTitulo: "sans titre",
			sinProducto: "sans produit",
			btnTrello: "Voir sur Trello",
			btnCanalDiscord: "Canal Trello sur Discord",
			resultadoAceptada: "acceptée",
			resultadoRechazada: "rejetée",
			resultadoArchivada: "archivée",
			resultadoArreglado: "corrigé",
			resultadoArchivado: "archivé",
			resultadoActualizada: "mise à jour"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"de-DE": {
		reporte: {
			msgEnviado:
				"${emojis.check} Dein **Bericht** (*${titulo}*) für **${producto}** wurde erfolgreich an das Team gesendet. Wir benachrichtigen dich privat, sobald er geprüft wurde.",
			footer: "Danke, dass du uns diesen Fehler gemeldet hast",
			btnTrello: "Bericht auf Trello ansehen",
			btnCanalDiscord: "Trello-Kanal auf Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} Dein **Vorschlag** (*${titulo}*) für **${producto}** wurde erfolgreich an das Team gesendet. Wir benachrichtigen dich privat, sobald er geprüft wurde.",
			footer: "Danke für deinen Beitrag — er hilft uns, Mia zu verbessern",
			btnTrello: "Vorschlag auf Trello ansehen",
			btnCanalDiscord: "Trello-Kanal auf Discord"
		},
		dm: {
			tipoReporte: "Bericht",
			tipoSugerencia: "Vorschlag",
			revisadoM: "geprüft",
			revisadoF: "geprüft",
			marcadoM: "markiert",
			marcadoF: "markiert",
			footerReporte: "Danke, dass du uns hilfst, Mia zu verbessern",
			footerSugerencia: "Danke für deinen Beitrag zu Mia",
			msgGestion:
				"${emojis.check} Dein **${tipo}** (*${titulo}*) für **${producto}** wurde vom Team ${revisado} und als **${resultado}** ${marcado}",
			sinTitulo: "ohne Titel",
			sinProducto: "ohne Produkt",
			btnTrello: "Auf Trello ansehen",
			btnCanalDiscord: "Trello-Kanal auf Discord",
			resultadoAceptada: "angenommen",
			resultadoRechazada: "abgelehnt",
			resultadoArchivada: "archiviert",
			resultadoArreglado: "behoben",
			resultadoArchivado: "archiviert",
			resultadoActualizada: "aktualisiert"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"it-IT": {
		reporte: {
			msgEnviado:
				"${emojis.check} La tua **segnalazione** (*${titulo}*) per **${producto}** è stata inviata al team con successo. Ti avviseremo in privato quando sarà esaminata.",
			footer: "Grazie per averci segnalato questo errore",
			btnTrello: "Vedi segnalazione su Trello",
			btnCanalDiscord: "Canale Trello su Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} Il tuo **suggerimento** (*${titulo}*) per **${producto}** è stato inviato al team con successo. Ti avviseremo in privato quando sarà esaminato.",
			footer: "Grazie per il tuo contributo, ci aiuta a migliorare Mia",
			btnTrello: "Vedi suggerimento su Trello",
			btnCanalDiscord: "Canale Trello su Discord"
		},
		dm: {
			tipoReporte: "segnalazione",
			tipoSugerencia: "suggerimento",
			revisadoM: "esaminato",
			revisadoF: "esaminata",
			marcadoM: "contrassegnato",
			marcadoF: "contrassegnata",
			footerReporte: "Grazie per aiutarci a migliorare Mia",
			footerSugerencia: "Grazie per il tuo contributo a Mia",
			msgGestion:
				"${emojis.check} La tua **${tipo}** (*${titulo}*) per **${producto}** è stata ${revisado} dal team ed è stata ${marcado} come **${resultado}**",
			sinTitulo: "senza titolo",
			sinProducto: "senza prodotto",
			btnTrello: "Vedi su Trello",
			btnCanalDiscord: "Canale Trello su Discord",
			resultadoAceptada: "accettata",
			resultadoRechazada: "rifiutata",
			resultadoArchivada: "archiviata",
			resultadoArreglado: "risolto",
			resultadoArchivado: "archiviato",
			resultadoActualizada: "aggiornata"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"pt-BR": {
		reporte: {
			msgEnviado:
				"${emojis.check} Seu **relatório** (*${titulo}*) do produto **${producto}** foi enviado à equipe com sucesso. Avisaremos você no privado quando for revisado.",
			footer: "Obrigado por nos reportar este erro",
			btnTrello: "Ver relatório no Trello",
			btnCanalDiscord: "Canal do Trello no Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} Sua **sugestão** (*${titulo}*) do produto **${producto}** foi enviada à equipe com sucesso. Avisaremos você no privado quando for revisada.",
			footer: "Obrigado pela sua contribuição, isso nos ajuda a melhorar a Mia",
			btnTrello: "Ver sugestão no Trello",
			btnCanalDiscord: "Canal do Trello no Discord"
		},
		dm: {
			tipoReporte: "relatório",
			tipoSugerencia: "sugestão",
			revisadoM: "revisado",
			revisadoF: "revisada",
			marcadoM: "marcado",
			marcadoF: "marcada",
			footerReporte: "Obrigado por nos ajudar a melhorar a Mia",
			footerSugerencia: "Obrigado pela sua contribuição à Mia",
			msgGestion:
				"${emojis.check} Sua **${tipo}** (*${titulo}*) do produto **${producto}** foi ${revisado} pela equipe e foi ${marcado} como **${resultado}**",
			sinTitulo: "sem título",
			sinProducto: "sem produto",
			btnTrello: "Ver no Trello",
			btnCanalDiscord: "Canal do Trello no Discord",
			resultadoAceptada: "aceita",
			resultadoRechazada: "rejeitada",
			resultadoArchivada: "arquivada",
			resultadoArreglado: "corrigido",
			resultadoArchivado: "arquivado",
			resultadoActualizada: "atualizada"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"pt-PT": {
		reporte: {
			msgEnviado:
				"${emojis.check} O teu **relatório** (*${titulo}*) do produto **${producto}** foi enviado à equipa com sucesso. Avisar-te-emos por mensagem privada quando for revisto.",
			footer: "Obrigado por nos reportares este erro",
			btnTrello: "Ver relatório no Trello",
			btnCanalDiscord: "Canal do Trello no Discord"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} A tua **sugestão** (*${titulo}*) do produto **${producto}** foi enviada à equipa com sucesso. Avisar-te-emos por mensagem privada quando for revista.",
			footer: "Obrigado pela tua contribuição, isto ajuda-nos a melhorar a Mia",
			btnTrello: "Ver sugestão no Trello",
			btnCanalDiscord: "Canal do Trello no Discord"
		},
		dm: {
			tipoReporte: "relatório",
			tipoSugerencia: "sugestão",
			revisadoM: "revisto",
			revisadoF: "revista",
			marcadoM: "marcado",
			marcadoF: "marcada",
			footerReporte: "Obrigado por nos ajudares a melhorar a Mia",
			footerSugerencia: "Obrigado pela tua contribuição à Mia",
			msgGestion:
				"${emojis.check} A tua **${tipo}** (*${titulo}*) do produto **${producto}** foi ${revisado} pela equipa e foi ${marcado} como **${resultado}**",
			sinTitulo: "sem título",
			sinProducto: "sem produto",
			btnTrello: "Ver no Trello",
			btnCanalDiscord: "Canal do Trello no Discord",
			resultadoAceptada: "aceite",
			resultadoRechazada: "rejeitada",
			resultadoArchivada: "arquivada",
			resultadoArreglado: "corrigido",
			resultadoArchivado: "arquivado",
			resultadoActualizada: "atualizada"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"ja-JP": {
		reporte: {
			msgEnviado:
				"${emojis.check} **${producto}** の **レポート**（*${titulo}*）をチームに正常に送信しました。確認が完了したらDMでお知らせします。",
			footer: "この不具合の報告ありがとうございます",
			btnTrello: "Trelloでレポートを見る",
			btnCanalDiscord: "DiscordのTrelloチャンネル"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} **${producto}** の **提案**（*${titulo}*）をチームに正常に送信しました。確認が完了したらDMでお知らせします。",
			footer: "ご協力ありがとうございます。Miaの改善に役立ちます",
			btnTrello: "Trelloで提案を見る",
			btnCanalDiscord: "DiscordのTrelloチャンネル"
		},
		dm: {
			tipoReporte: "レポート",
			tipoSugerencia: "提案",
			revisadoM: "確認済み",
			revisadoF: "確認済み",
			marcadoM: "次の状態に",
			marcadoF: "次の状態に",
			footerReporte: "Miaの改善にご協力いただきありがとうございます",
			footerSugerencia: "Miaへのご協力ありがとうございます",
			msgGestion:
				"${emojis.check} **${producto}** の **${tipo}**（*${titulo}*）はチームにより${revisado}され、**${resultado}** と${marcado}されました",
			sinTitulo: "タイトルなし",
			sinProducto: "製品なし",
			btnTrello: "Trelloで見る",
			btnCanalDiscord: "DiscordのTrelloチャンネル",
			resultadoAceptada: "承認",
			resultadoRechazada: "却下",
			resultadoArchivada: "アーカイブ",
			resultadoArreglado: "修正済み",
			resultadoArchivado: "アーカイブ",
			resultadoActualizada: "更新"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"zh-CN": {
		reporte: {
			msgEnviado:
				"${emojis.check} 你关于 **${producto}** 的 **报告**（*${titulo}*）已成功发送给团队，审核完成后我们会通过私信通知你。",
			footer: "感谢你向我们报告此问题",
			btnTrello: "在 Trello 上查看报告",
			btnCanalDiscord: "Discord 上的 Trello 频道"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} 你关于 **${producto}** 的 **建议**（*${titulo}*）已成功发送给团队，审核完成后我们会通过私信通知你。",
			footer: "感谢你的贡献，这有助于我们改进 Mia",
			btnTrello: "在 Trello 上查看建议",
			btnCanalDiscord: "Discord 上的 Trello 频道"
		},
		dm: {
			tipoReporte: "报告",
			tipoSugerencia: "建议",
			revisadoM: "已审核",
			revisadoF: "已审核",
			marcadoM: "标记为",
			marcadoF: "标记为",
			footerReporte: "感谢你帮助我们改进 Mia",
			footerSugerencia: "感谢你对 Mia 的贡献",
			msgGestion:
				"${emojis.check} 你关于 **${producto}** 的 **${tipo}**（*${titulo}*）已由团队${revisado}，并${marcado} **${resultado}**",
			sinTitulo: "无标题",
			sinProducto: "无产品",
			btnTrello: "在 Trello 上查看",
			btnCanalDiscord: "Discord 上的 Trello 频道",
			resultadoAceptada: "已接受",
			resultadoRechazada: "已拒绝",
			resultadoArchivada: "已归档",
			resultadoArreglado: "已修复",
			resultadoArchivado: "已归档",
			resultadoActualizada: "已更新"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	},
	"tr-TR": {
		reporte: {
			msgEnviado:
				"${emojis.check} **${producto}** için **raporun** (*${titulo}*) ekibe başarıyla gönderildi. İncelendiğinde seni özel mesajla bilgilendireceğiz.",
			footer: "Bu hatayı bildirdiğin için teşekkürler",
			btnTrello: "Raporu Trello'da gör",
			btnCanalDiscord: "Discord'daki Trello kanalı"
		},
		sugerencia: {
			msgEnviado:
				"${emojis.check} **${producto}** için **önerin** (*${titulo}*) ekibe başarıyla gönderildi. İncelendiğinde seni özel mesajla bilgilendireceğiz.",
			footer: "Katkın için teşekkürler, Mia'yı geliştirmemize yardımcı oluyor",
			btnTrello: "Öneriyi Trello'da gör",
			btnCanalDiscord: "Discord'daki Trello kanalı"
		},
		dm: {
			tipoReporte: "rapor",
			tipoSugerencia: "öneri",
			revisadoM: "incelendi",
			revisadoF: "incelendi",
			marcadoM: "işaretlendi",
			marcadoF: "işaretlendi",
			footerReporte: "Mia'yı geliştirmemize yardım ettiğin için teşekkürler",
			footerSugerencia: "Mia'ya katkın için teşekkürler",
			msgGestion:
				"${emojis.check} **${producto}** için **${tipo}** (*${titulo}*) ekibimiz tarafından ${revisado} ve **${resultado}** olarak ${marcado}",
			sinTitulo: "başlıksız",
			sinProducto: "ürün yok",
			btnTrello: "Trello'da gör",
			btnCanalDiscord: "Discord'daki Trello kanalı",
			resultadoAceptada: "kabul edildi",
			resultadoRechazada: "reddedildi",
			resultadoArchivada: "arşivlendi",
			resultadoArreglado: "düzeltildi",
			resultadoArchivado: "arşivlendi",
			resultadoActualizada: "güncellendi"
		},
		productos: { mia: "Mia", launcher: "Mia Launcher", checker: "Mia Checker" }
	}
};

blocks["es-LAT"] = blocks["es-ES"];

function findExtras(obj) {
	if (obj && typeof obj === "object") {
		if ("extras" in obj && obj.extras?.email) return obj.extras;
		for (const v of Object.values(obj)) {
			const found = findExtras(v);
			if (found) return found;
		}
	}
	return null;
}

for (const file of fs.readdirSync(globalDir)) {
	if (!file.endsWith(".json")) continue;
	const locale = file.replace(".json", "");
	const block = blocks[locale];
	if (!block) {
		console.warn(`skip ${file}: no block`);
		continue;
	}
	const filePath = path.join(globalDir, file);
	const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
	const extras = findExtras(data);
	if (!extras) {
		console.error(`extras not found in ${file}`);
		process.exitCode = 1;
		continue;
	}
	if (extras.trelloFeedback) {
		console.log(`skip ${file}: already patched`);
		continue;
	}
	extras.trelloFeedback = block;
	fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
	console.log(`patched ${file}`);
}
