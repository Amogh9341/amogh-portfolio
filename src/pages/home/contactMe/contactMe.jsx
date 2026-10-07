import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../../../content.js";
import "./contactMe.css";

const { formLabels, formPlaceholders, formButtonText, mapsButtonText } = contact;

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactMe() {
	const [form, setForm] = useState({ subject: "", mailId: "", body: "" });
	const [status, setStatus] = useState({ type: "", message: "" });
	const [isSending, setIsSending] = useState(false);

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
			setStatus({
				type: "error",
				message: "Email sending is not configured yet. Use the alternate email address shown beside the form.",
			});
			return;
		}

		setIsSending(true);
		setStatus({ type: "", message: "" });

		try {
			await emailjs.send(
				emailJsServiceId,
				emailJsTemplateId,
				{
					from_email: form.mailId,
					reply_to: form.mailId,
					subject: form.subject,
					message: `From: ${form.mailId}\nSubject: ${form.subject}\n\n${form.body}`,
				},
				{ publicKey: emailJsPublicKey },
			);
			setForm({ subject: "", mailId: "", body: "" });
			setStatus({ type: "success", message: "Message sent. Thanks for reaching out." });
		} catch {
			setStatus({ type: "error", message: "Message could not be sent. Please try again or email me directly." });
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section className="contact-section" id="contact" aria-labelledby="contact-title">
			<div className="contact-section__inner">
				<div className="contact-section__heading">
					<h2 id="contact-title">Contact</h2>
				</div>

				<div className="contact-section__content">
					<aside className="contact-location" aria-label="Location and alternate email address">
						<div className="contact-location__map">
							<a
								className="contact-location__maps-link"
								href={contact.location}
								target="_blank"
								rel="noreferrer noopener"
							>
								{mapsButtonText}
							</a>
							<p className="contact-location__map-text">Based in {contact.locationLabel}</p>
						</div>
						<div className="contact-location__details">
							<div>
								<p className="contact-location__label">Location</p>
								<p className="contact-location__value">{contact.locationLabel}</p>
							</div>
							<a className="contact-location__email" href={`mailto:${contact.alterMail}`}>
								{contact.alterMail}
							</a>
						</div>
					</aside>

					<form className="contact-form" onSubmit={handleSubmit}>
						<label className="contact-form__field">
							<span>{formLabels.subject}</span>
							<input
								autoComplete="off"
								name="subject"
								onChange={handleChange}
								placeholder={formPlaceholders.subject}
								required
								value={form.subject}
							/>
						</label>

						<label className="contact-form__field">
							<span>{formLabels.email}</span>
							<input
								autoComplete="email"
								name="mailId"
								onChange={handleChange}
								placeholder={formPlaceholders.email}
								required
								type="email"
								value={form.mailId}
							/>
						</label>

						<label className="contact-form__field">
							<span>{formLabels.body}</span>
							<textarea
								name="body"
								onChange={handleChange}
								placeholder={formPlaceholders.body}
								required
								rows={5}
								value={form.body}
							/>
						</label>

						<div className="contact-form__footer">
							<button className="contact-form__submit" disabled={isSending} type="submit">
								{isSending ? "Sending..." : formButtonText}
								<span aria-hidden="true"></span>
							</button>
							{status.message && (
								<p className={`contact-form__status contact-form__status--${status.type}`} role="status">
									{status.message}
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
