# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form

Create a `.env.local` file with the EmailJS service ID, template ID, and public key:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

In the EmailJS template settings, configure:

- **To Email:** your private recipient address, entered directly in the dashboard
- **Reply-To:** `{{reply_to}}`
- **Email Subject:** `{{subject}}`
- **Message body:** `{{message}}`

The message body already includes the sender's email and the subject as a fallback. The request also sends `{{from_email}}` if you want to place the sender address separately in a custom template. Do not add a `to_email` variable; this keeps your private recipient address out of the frontend. The contact panel displays only the alternate address configured in `src/content.js`.
