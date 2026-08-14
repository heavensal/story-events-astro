/**
 * HTML body matching `src/templates/email/contact-message.html`.
 * For an external POST handler (not used in this static site).
 */
export interface ContactMailFields {
	fullName: string;
	email: string;
	message: string;
}

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

export function buildContactEmailHtml(fields: ContactMailFields): string {
	const fullName = escapeHtml(fields.fullName);
	const email = escapeHtml(fields.email);
	const message = escapeHtml(fields.message || "(vide)");

	return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Nouveau message — Story Events</title>
</head>
<body style="margin:0;font-family:Georgia,serif;background:#070708;color:#f4f5f7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;padding:24px;">
<tr>
<td style="background:#141416;border-radius:4px;padding:24px;border:1px solid #1c1c1f;">
<h1 style="margin:0 0 16px;font-size:20px;color:#f4f5f7;">Demande de partenariat</h1>
<p style="margin:0 0 8px;font-size:14px;color:#c8ccd4;"><strong>Nom :</strong> ${fullName}</p>
<p style="margin:0 0 8px;font-size:14px;color:#c8ccd4;"><strong>Email :</strong> <a href="${encodeURI("mailto:" + fields.email)}" style="color:#c8ccd4;">${email}</a></p>
<p style="margin:16px 0 8px;font-size:14px;color:#c8ccd4;"><strong>Message :</strong></p>
<div style="font-size:14px;color:#f4f5f7;white-space:pre-wrap;border-left:4px solid #c8ccd4;padding-left:12px;">${message}</div>
</td>
</tr>
<tr>
<td style="padding:16px 8px;font-size:12px;color:#8b919d;text-align:center;">
Message envoyé depuis le formulaire story-events.fr
</td>
</tr>
</table>
</body>
</html>`;
}
