import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../../../content.js";
import "./contactMe.css";

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
					<p className="contact-section__eyebrow">Contact</p>
					<h2 id="contact-title">Let&apos;s make<br />something matter.</h2>
				</div>

				<div className="contact-section__content">
					<aside className="contact-location" aria-label="Location and alternate email address">
						<div className="contact-location__map" aria-hidden="true">
							<span className="contact-location__marker" />
							<span className="contact-location__map-label">CURRENT LOCATION</span>
						</div>
						<div className="contact-location__details">
							<div>
								<p className="contact-location__label">Based in</p>
								<p className="contact-location__value">{contact.location}</p>
							</div>
							<a className="contact-location__email" href={`mailto:${contact.alterMail}`}>
								{contact.alterMail}
							</a>
						</div>
					</aside>

					<form className="contact-form" onSubmit={handleSubmit}>
						<label className="contact-form__field">
							<span>Subject</span>
							<input
								autoComplete="off"
								name="subject"
								onChange={handleChange}
								placeholder="What would you like to discuss?"
								required
								value={form.subject}
							/>
						</label>

						<label className="contact-form__field">
							<span>Mail ID</span>
							<input
								autoComplete="email"
								name="mailId"
								onChange={handleChange}
								placeholder="you@example.com"
								required
								type="email"
								value={form.mailId}
							/>
						</label>

						<label className="contact-form__field">
							<span>Body</span>
							<textarea
								name="body"
								onChange={handleChange}
								placeholder="Write your message..."
								required
								rows={5}
								value={form.body}
							/>
						</label>

						<div className="contact-form__footer">
							<button className="contact-form__submit" disabled={isSending} type="submit">
								{isSending ? "Sending..." : "Send message"}
								<span aria-hidden="true">↗</span>
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
